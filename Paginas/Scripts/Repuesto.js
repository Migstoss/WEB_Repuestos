class Repuesto {
    constructor(Codigo, Nombre_repuesto, Categoria, Marca, Cantidad, Precio, Proveedor, Garantia) {
        this.Codigo = Codigo;
        this.Nombre_repuesto = Nombre_repuesto;
        this.Categoria = Categoria;
        this.Marca = Marca;
        this.Cantidad = Cantidad;
        this.Precio = Precio;
        this.Proveedor = Proveedor;
        this.Garantia = Garantia;
    }
}
jQuery(function () {
  LlenarComboXServicios("https://localhost:44323/api/Perfiles/LlenarCombo", "#cboProveedor");
});
async function EjecutarComando(Metodo, Funcion) {
    let idPerfil = $("#cboPerfil").val();
    let Clave = $("#txtClave").val();
    let RepitaClave = $("#txtConfirmaClave").val();
    if (Clave != RepitaClave) {
        $("#dvMensaje").html("Las claves no son iguales");
        return;
    }
    let URL = "https://localhost:44323/api/Usuarios/" + Funcion + "?Perfil=" + idPerfil;
    const usuario = new Usuario(0, $("#txtDocumento").val(), $("#txtUsuario").val(), Clave);
    await EjecutarServicio(Metodo, URL, usuario);
    LlenarTabla();
}
async function BuscarEmpleado() {
    let Documento = $("#txtDocumento").val();
    let URL = "https://localhost:44323/api/Empleados/ConsultarXDocumento?Documento=" + Documento;
    const empleado = await ConsultarServicio(URL);
    if (empleado == null) {
        $("#dvMensaje").html("El documento del empleado no existe en la base de datos, o no tiene información completa");
        $("#txtNombre").val("");
        $("#txtCargo").val("");
    }
    else {
        $("#dvMensaje").html("");
        $("#txtNombre").val(empleado[0].Empleado);
        $("#txtCargo").val(empleado[0].Cargo);
    }
}
