/* ---------------------------------------------------
        IMPORTACIONES DE REACT DATE PICKER (web)      
        para trabajar el selector de fechas dinámico
-----------------------------------------------------*/   
import React from "react";
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import theme from './../theme';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
/* Esta importación en particular está tomada de la página de date-fns y es para usar el idioma diferente al inglés, en este caso lo cambio a español (es) */
import { es } from 'date-fns/locale';
/* Esta función y la siguiente se podrían convetir a tipo flecha pero así como están también funcioanan perfectamente */
function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es });
}
/* HASTA AQUÍ LAS IMPORTACIONES DE REACT DATE PICKER */

/* Estos arreglos reemplazan los nombres de los meses y días para el Date Picker que está en inglés */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

/* --------------------------------------------------
    ESTILOS PARA EL COMPONENTE DATE PICKER EN LA APP
    Estos estilos adicionales a los de la librería son necesarios para organizar bien la diposición del elemento date picker en la app
----------------------------------------------------- */
const ContenedorInput = styled.div`
    input {
        font-family: 'Work Sans', sans-serif;       
        box-sizing: border-box;
        background: ${theme.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 5rem; /* 80px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 
    @media(max-width: 60rem){ /* 950px */
        & > * {
            width: 100%;
        }
    }
`;


const DatePicker = ({fecha, cambiarFecha}) => {
    return ( 
        <ContenedorInput>
            <DayPickerInput
                value={fecha}
                /* Esta función se ejecuta cuando el usuario cambia el día en el calendario */
                onDayChange={(day) => cambiarFecha(day)}
                /* Aquí le paso el formato de fecha que quiero utilizar en la app (ver documentación*/
                format="dd 'de' MMMM 'de' yyyy"
                /* Se deben pasar también estos valores para la conversión del formato fecha personalizado */
                formatDate={formatDate}
                parseDate={parseDate}
                /* Accedo a las propiedades del dayPicker para reemplazar los valores de los meses y días al español */
                dayPickerProps={
                    {
                        months: meses,
                        weekdaysShort: dias_semana_cortos
                    }
                }
            />
        </ContenedorInput>
        
     );
}
 
export default DatePicker;