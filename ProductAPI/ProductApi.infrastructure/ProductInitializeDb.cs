using ProductApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.infrastructure
{
    public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add( new Product
            {
               ProductID="1",
               Color="red",
               Description="this is a red hammer",
               ExpiryDate=DateTime.Now,
               ImageUrl="abc.jpg",
               instock=true,
               Price=200,
               Quantity=20,
               Rating=5,
               Title="Hammer"
                
           });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "black",
                Description = "this is a red saw",
                ExpiryDate = DateTime.Now,
                ImageUrl = "saw.jpg",
                instock = true,
                Price = 200,
                Quantity = 20,
                Rating = 5,
                Title = "Saw"

            });
            try
            {
                context.SaveChanges();
            }
            catch(Exception e)
            {
                var e1 = e.InnerException;
            }
            base.Seed(context);
        }
    }
}
