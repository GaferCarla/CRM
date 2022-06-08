using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRM.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Asesorias()
        {
            return View();
        }

        public ActionResult Clientes()
        {
            return View();
        }

        public ActionResult Cotizaciones()
        {
            return View();
        }

        public ActionResult Prospectos()
        {
            return View();
        }

        public ActionResult Seguimiento()
        {
            return View();
        }

        public ActionResult Indicadores()
        {
            return View();
        }

        public ActionResult Usuarios()
        {
            return View();
        }


        public ActionResult verRegistro()
        {
            return View();
        }

        public ActionResult verUsuario()
        {
            return View();
        }

        public ActionResult editarRegistro()
        {
            return View();
        }

        public ActionResult añadirNvoRegistro()
        {
            return View();
        }

        public ActionResult historialCliente()
        {
            return View();
        }

        public ActionResult editarDatosClientes()
        {
            return View();
        }

        public ActionResult Cotizador()
        {
            return View();
        }

        public ActionResult RecursoComercializacion()
        {
            return View();
        }


        public ActionResult Landing()
        {
            return View();
        }

        public ActionResult Reporte()
        {
            return View();
        }

        public ActionResult Añadir_evidencia()
        {
            return View();
        }

        public ActionResult listado_Evidencia()
        {
            return View();
        }

        public ActionResult encuestaMedidas37()
        {
            return View();
        }


    }
}