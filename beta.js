var covariance = document.getElementById('covariance');
var variance = document.getElementById('variance');

function beta_function() {
    
    beta = covariance.value / variance.value;
    document.getElementById('beta_result').innerHTML = beta;
    
}
function beta_reset() {
    $("input[type=number]").val('');
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [' Covariance (%)', ' Variance (%)', ' Covariance (%)', ' Variance (%)'],
        datasets: [{
            data: [covariance.value, variance.value,60,40],
            backgroundColor: [
                'rgba(48, 252, 246)',
                'rgba(252, 125, 116)',
                'rgba(20,20,20)',
            ],
            borderWidth: 5,
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});
function updatechart() {
    var total = parseInt(covariance.value) + parseInt(variance.value)
  var updatechartvalues = [((parseInt(covariance.value) / total) * 100), (parseInt(variance.value) / total) * 100];
  myChart.data.datasets[0].data = updatechartvalues;
  myChart.update();
}