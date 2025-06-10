using Microsoft.AspNetCore.Mvc;
using OptimizelyModules.CMS.Models.Pages;
using OptimizelyModules.CMS.Models.ViewModels;

namespace OptimizelyModules.CMS.Controllers;

public class SearchPageController : PageControllerBase<SearchPage>
{
    public ViewResult Index(SearchPage currentPage, string q)
    {
        var model = new SearchContentModel(currentPage)
        {
            Hits = Enumerable.Empty<SearchContentModel.SearchHit>(),
            NumberOfHits = 0,
            SearchServiceDisabled = true,
            SearchedQuery = q
        };

        return View(model);
    }
}
