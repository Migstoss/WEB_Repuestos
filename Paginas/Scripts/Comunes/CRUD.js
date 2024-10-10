async function EjecutarServicio(Metodo, url, objeto)
{
    try {
        const Resultado = await fetch(url,
            {
                method: Metodo,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(objeto)
            });
        const Respuesta = await Resultado.json();
        $("#dvMensaje").html(Respuesta);
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function ConsultarServicio(url) {
    try {
        const Resultado = await fetch(url,
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        const Respuesta = await Resultado.json();
        return Respuesta;
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function LlenarComboXServicios(URLServicio, ComboLlenar) {
    try {
        const Respuesta = await fetch(URLServicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        $(ComboLlenar).empty();
        for (i = 0; i < Rpta.length; i++) {
            $(ComboLlenar).append('<option value=' + Rpta[i].Codigo + '>' + Rpta[i].Nombre + '</option>');
        }
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function LlenarTablaXServicios(URLServicio, TablaLlenar) {
    try {
        const Respuesta = await fetch(URLServicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        var Columnas = [];
        NombreColumnas = Object.keys(Rpta[0]);
        for (var i in NombreColumnas) {
            Columnas.push({
                data: NombreColumnas[i],
                title: NombreColumnas[i]
            });
        }
        $(TablaLlenar).DataTable({
            data: Rpta,
            columns: Columnas,
            destroy: true
        });
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}