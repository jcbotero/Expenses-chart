
import {datos} from './datos.js';
let valores = datos.map(datos => datos.day);// con .map transformo la array data en una array solo con la property title
let amounts = datos.map(datos => datos.amount);

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
         legend: {enabled: false }, // asi quito la etiquita del bottom
         credits: { enabled: false}, // asi quito el logo de highcharts de la esquina
        chart: {
            type: 'column',
            height: 350, // controlar la altura de la grafica
            events: { // asi cambio el color de una barra. tbn lo puedo utilizar para cambiar el valor u otro stylo
                load: function() {
                    var point = this.series[0].data[2];
                    point.update({
                        color: 'hsl(186, 34%, 60%)',
                        states: { // con state cambio cosas on hover o demas estador
                            hover: {
                                color: "hsl(186, 69%, 81%)",
                            }},
                    })}
                },
        },
        yAxis: { labels: {enabled: false}, title: {enabled: false},// asi quito las labels o valorees de eje y tbn el titulo
        visible: false, // asi quito las lineas o grids del eje y
        }, 
        title: {
            style: {
                color: 'hsl(25, 47%, 15%)',
                fontWeight: 'bolder',
                fontSize: '38',
            },
            x: 10,
            y: 50, // con x y la y le doy padding a los textos e imagenes de las charts
            align: 'left',
            margin: 70,
            text: document.getElementById("title").innerText
        },
        xAxis: {
            lineColor: 'transparent', // asi le doy color o quito la linea grid del eje x
            categories: valores, // despues de loopear la array del json con .map simplemente coloco el nombre de la variable aqui
            tickColor: 'red',
            labels: {
                style: {
                    fontSize: '17'
                } // asi le doy estilo a xaxis
            }
        },
        series: [{
            data: amounts, 
            color:'hsl(10, 79%, 65%)', // asi le doy color a los datos del eje x
            states: {
                hover: {
                    color: "hsl(10, 76%, 84%)"
                }},
        }],
        tooltip: {
            formatter: function() { // con esta function retorno el texto que quiero para el tooltip y tbn el color de la font
                return '<span style="font-size: 18px; color: white;">' +"$" + this.y +'</b></span>'
            },
            backgroundColor: 'hsl(25, 47%, 15%)',
            borderColor: 'none',
            borderStyle: "none",
            shape: "square" // asi le quito la arrow al tooltip
        },
        plotOptions: { // para agrandar el tamaaño de las barras
            series: {
                cursor: 'pointer', // aqui le pongo pointer al cursor
                pointWidth: 58,
                borderRadius: 5 // asi le pongo border riadus a la columnas
            }}, 
            responsive: { // asi hago responsive una highchart, la condicion es la maxwidh de la grafica no la screen, los arreglos van dentro de chartoptions
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: { 
                        chart: {
                        height: 400,},
                        series: {
                            pointWidth: 38,
                        },
                        title: {
                            style: {
                                fontSize: '23',
                            },
                            y: 60, 
                        },   
                    },   
                    }]},    
    });  // chart.update({tooltip: {enabled: false}}); asi quitaria los datos en hoover de tooltip
});








