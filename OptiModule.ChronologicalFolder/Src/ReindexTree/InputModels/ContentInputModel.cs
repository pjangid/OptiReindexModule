using System.Runtime.Serialization;

namespace OptiModule.ChronologicalFolder.ReindexTree.InputModels
{
    [DataContract]
    public class ContentInputModel
    {
        [DataMember(Name = "contentLinkId")]
        public string ContentLinkId { get; set; }

        [DataMember(Name = "childrenOnly")]
        public bool ChildrenOnly { get; set; }
    }
}
