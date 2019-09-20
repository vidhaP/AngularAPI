﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ProductApi.core.Entities;
using ProductApi.core.Repositories;
using ProductApi.infrastructure;

namespace WebApplication1.Controllers
{
    public class ProductsController : ApiController
    {
        private ProductRepository db = new ProductRepository();
        //private ProductContext db = new ProductContext();

        // GET: api/Products
        public IEnumerable<Product> GetProducts()
        {
            return db.GetProducts();
        }

        // GET: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(string id)
        {
            Product product = db.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }




        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(string id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.ProductID)
            {
                return BadRequest();
            }

            //db.Entry(product).State = EntityState.Modified;
            db.Edit(product);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Add(product);

            return CreatedAtRoute("DefaultApi", new { id = product.ProductID }, product);
        }


        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(string id)
        {
            Product product = db.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Delete(id);
            return Ok(product);
        }


    }
}