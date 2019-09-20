using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductApi.infrastructure;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        ProductRepository repo;
        [TestInitialize]
        public void TestSetUp()
        {
            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }
        [TestMethod]
        public void shouldcreatedatabase()
        {
            int res = repo.GetProducts().ToList().Count;
            Assert.AreEqual(2, res);

        }
    }
}

