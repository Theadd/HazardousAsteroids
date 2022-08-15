using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace UI.Controllers
{
	public class MainController : Controller
	{

		public MainController()
		{
			// init...
		}

		public ActionResult Index()
		{
			return View(new IndexViewModel() { });
		}

		public class IndexViewModel
		{

		}
	}
}
