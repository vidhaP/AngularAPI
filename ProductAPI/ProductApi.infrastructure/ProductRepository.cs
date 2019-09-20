using ProductApi.core.Entities;
using ProductApi.core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.infrastructure
{
    public class ProductRepository : IProductRepository
    {
        ProductContext context = new ProductContext();
        public void Add(Product p)
        {
            context.Products.Add(p);
            context.SaveChanges();
            //throw new NotImplementedException();
        }

        public void Delete(string ProductID)
        {
            Product b = context.Products.Find(ProductID);
            context.Products.Remove(b);
            context.SaveChanges();
            //throw new NotImplementedException();
        }

        public void Edit(Product p)
        {
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            //throw new NotImplementedException();
        }

        public Product GetById(string ProductID)
        {
            var bloodDonor = (from r in context.Products where r.ProductID == ProductID select r).FirstOrDefault();
            return bloodDonor;
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products;
            //throw new NotImplementedException();
        }
    }
}
