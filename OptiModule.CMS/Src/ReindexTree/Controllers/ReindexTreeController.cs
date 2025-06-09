using EPiServer.Cms.Shell.UI.Controllers.Internal;
using EPiServer.Find;
using EPiServer.ServiceLocation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OptimizelyModules.CMS.ReindexTree.InputModels;

namespace OptimizelyModules.CMS.ReindexTree.Controllers
{
    [Route("api/indexing/reindex-tree")]
    public class ReindexTreeController : BaseController
    {
        private readonly Injected<IContentLoader> _contentLoader;
        private readonly Injected<IClient> _client;

        [AllowAnonymous]
        [HttpGet]
        public async Task<JsonResult> Get(ContentInputModel inputModel)
        {
            // Fetch item using the item id
            if (int.TryParse(inputModel.ContentLinkId, out var itemId))
            {
                var contentReference = new ContentReference(itemId);
                if (!_contentLoader.Service.TryGet(contentReference, out IContent content))
                {
                    return new JsonResult(new { message = $"Content with id '{inputModel.ContentLinkId}' was not found." });
                }

                var contentItems = new List<IContent> { content };

                if (inputModel.ChildrenOnly)
                {
                    var childItems = _contentLoader.Service.GetChildren<IContent>(contentReference)?.ToList()
                                     ?? new List<IContent>();
                    contentItems.AddRange(childItems);
                }
                else
                {
                    var descendentItem = _contentLoader.Service
                                .GetDescendents(contentReference)?
                                .Select(x => _contentLoader.Service.Get<IContent>(x))
                                .ToList()
                                ?? new List<IContent>();
                    contentItems.AddRange(descendentItem);
                }

                await _client.Service.IndexAsync(contentItems);
            }
            
            return new JsonResult(new { message = "Reindexing completed." });
        }
    }
}
