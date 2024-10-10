class Proveedores {
  constructor(Codigo, Nombre, Direccion, Email, Telefono) {
    this.Codigo = Codigo;
    this.Nombre = Nombre;
    this.Salario = Salario;
    this.Direccion = Direccion;
    this.Email = Email;
    this.Telefono = Telefono;
  }
}
async function EjecutarComando(Metodo, Funcion) {
  let URL = "https://localhost:44351/api/proveedor/" + Funcion;
  const proveedor = new Cargo($("#txtCod").val(), $("#txtNombreProveedor").val(), $("#txtDirecProveedor").val(), $("#txtemailProveedor").val(), $("#txtTelProveedor").val());
  EjecutarServicio(Metodo, URL, proveedor);
}
async function Consultar() {
  let Codigo = $("#txtCod").val();
  let URL = "https://localhost:44351/api/proveedor/ConsultarXcodigo?Codigo=" + Codigo;
  const proveedor = await ConsultarServicio(URL);
  if (proveedor == null) {
    $("#dvMensaje").html("El código del proveedor no existe en la base de datos");
    $("#txtNombreProveedor").val("");
    $("#txtDirecProveedor").val("");
    $("#txtemailProveedor").val("");
    $("#txtTelProveedor").val("");
  }
  else {
    //Escribir las respuestas
    $("#txtNombreProveedor").val(proveedor.Nombre);
    $("#txtDirecProveedor").val(proveedor.Direccion);
    $("#txtemailProveedor").val(proveedor.Email);
    $("#txtTelProveedor").val(proveedor.Telefono);
    $("#dvMensaje").html("");
  }
}