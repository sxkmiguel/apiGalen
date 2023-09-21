import { getConnection } from "../database/connection";

export const getUsers = async(req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query("SELECT c.IdCita AS cita, p.NroDocumento AS 'numero documento', a.IdCuentaAtencion AS cuenta, CONCAT(p.ApellidoPaterno, ' ',p.ApellidoMaterno, ' ',p.PrimerNombre) AS 'nombre completo', CONVERT(DATE, c.Fecha) AS fecha, c.HoraInicio AS hora, s.Nombre AS consultorio, es.Nombre AS especialidad, CONCAT(e.ApellidoPaterno COLLATE Modern_Spanish_CI_AS, ' ', e.ApellidoMaterno COLLATE Modern_Spanish_CI_AS,' ',e.Nombres COLLATE Modern_Spanish_CI_AS) AS medico FROM Citas AS c LEFT OUTER JOIN Atenciones AS a ON c.IdAtencion = a.IdAtencion LEFT OUTER JOIN Pacientes AS p ON c.IdPaciente = p.IdPaciente LEFT OUTER JOIN Servicios AS s ON c.IdServicio = s.IdServicio LEFT OUTER JOIN Especialidades AS es ON c.IdEspecialidad = es.IdEspecialidad LEFT OUTER JOIN Medicos AS m ON c.IdMedico = m.IdMedico LEFT OUTER JOIN Empleados AS e ON m.IdEmpleado = e.IdEmpleado WHERE c.IdCita >= 273165 ORDER BY c.IdCita")
    res.json(result.recordset)
};
