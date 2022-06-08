
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['% Ambiente de trabajo', '% Factores propios de la actividad', '% Organización del tiempo de trabajo', '% Liderazgo y relaciones de trabajo', '% Entorno organizacional'],
            datasets: [{
                label: '% de cumplimiento',
                data: [6 / 0.1, 8 / 0.1, 3 / 0.04, 5 / 0.05, 3 / 0.08],
                backgroundColor: [
                    'rgb(204, 84, 156,0.5)',
                    'rgb(109, 27, 220,0.5)',
                    'rgb(157, 29, 174,0.5)',
                    'rgb(141, 45, 187,0.5)',
                    'rgb(94, 39, 154,0.5)'
                ],
                borderColor: [
                    'rgb(204, 84, 156,0.8)',
                    'rgb(109, 27, 220,0.8)',
                    'rgb(157, 29, 174,0.8)',
                    'rgb(141, 45, 187,0.8)',
                    'rgb(94, 39, 154,0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {

        }
    });



    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Ambiente de trabajo', 'Factores propios de la actividad', 'Organización del tiempo de trabajo', 'Liderazgo y relaciones de trabajo', 'Entorno organizacional'],
            datasets: [{
                label: '% de cumplimiento',
                data: [6 / 0.1, 8 / 0.1, 3 / 0.04, 5 / 0.05, 3 / 0.08],
                backgroundColor: [
                    'rgb(204, 84, 156,0.5)',
                    'rgb(109, 27, 220,0.5)',
                    'rgb(157, 29, 174,0.5)',
                    'rgb(141, 45, 187,0.5)',
                    'rgb(94, 39, 154,0.5)'
                ],
                borderColor: [
                    'rgb(204, 84, 156,0.8)',
                    'rgb(109, 27, 220,0.8)',
                    'rgb(157, 29, 174,0.8)',
                    'rgb(141, 45, 187,0.8)',
                    'rgb(94, 39, 154,0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx3a = document.getElementById("myChart3a").getContext('2d');
    var myChart3a = new Chart(ctx3a, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#794475",
                    "rgb(76, 76, 78)"
                ],
                data: [6, 4]
            }]
        }
    });

    var ctx3b = document.getElementById("myChart3b").getContext('2d');
    var myChart3b = new Chart(ctx3b, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#794475",
                    "rgb(76, 76, 78)"
                ],
                data: [8, 2]
            }]
        }
    });

    var ctx3c = document.getElementById("myChart3c").getContext('2d');
    var myChart3c = new Chart(ctx3c, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#794475",
                    "rgb(76, 76, 78)"
                ],
                data: [3, 1]
            }]
        }
    });

    var ctx3d = document.getElementById("myChart3d").getContext('2d');
    var myChart3d = new Chart(ctx3d, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#794475",
                    "rgb(76, 76, 78)"
                ],
                data: [5, 5]
            }]
        }
    });

    var ctx3e = document.getElementById("myChart3e").getContext('2d');
    var myChart3e = new Chart(ctx3e, {
        type: 'doughnut',
        data: {
            datasets: [{
                backgroundColor: [
                    "#794475",
                    "rgb(76, 76, 78)"
                ],
                data: [3, 8]
            }]
        }
    });
