using System.ComponentModel.DataAnnotations;

namespace BookStore.API.Models
{
    public class BookModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Pleaseenter tile of your book")]
        [StringLength(100)]
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
