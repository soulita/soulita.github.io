var years = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5,6.9,3.4,8,12,9];
	var ifr = [10,8,12,9,13,7.9];
	var provinces = ["VTE", "PHO","SVN","LPB"];
	var pop = [820000,580000,640000,730000];
	var provinces2 = ["VTE","PHO","LNT","BOK","ODX","XBL","LPB","XEK","HOP","VTP","BKX","KHM","SVK","SVN","XEK","CHP","ATP","XSB"];
	var b_2019 = [4,5,7,4,9,7,9,6,7,10,5,6,15,4,2,11,4,2];
	var b_2020 = [6,7,9,6,11,9,11,8,9,12,7,8,17,6,4,13,6,4];
	console.log(provinces2,b_2019,b_2020)

	var ctx = document.getElementById("myChart")
	var myChart = new Chart(ctx,{
		type: "line",
		data:{
			labels: years,
			datasets: [{
				label: "GDP Growth Rate",
				data:gdp,
				borderColor: "#008585",
				fill:false,
				lineTension:0,
			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6,
					}
				}]
			},
			legend:{
				display:false,
			}
		}
		
	});
	//console.log(years,gdp);
	//end of my chart

	var ctx = document.getElementById("barChart");
	var barChart = new Chart(ctx,{
		type: "bar",
		data:{
			labels: years,
			datasets: [{
				label: "Inflation Rate",
				data:ifr,
				backgroundColor:["#007575","#008585","#009e9e","#00b8b8","#00d1d1","#00ebeb"],
			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:5,
						maxTicksLimit:5,
					}
				}]
			},
			legend:{
				display:false,
			}
		}
	});
	//end barChart

	var ctx = document.getElementById("pieChart");
	var pieChart = new Chart(ctx,{
		type: "pie",
		data:{
			labels:years,
			datasets:[{
				label:"Inflation Rate",
				data:ifr,
				backgroundColor:["#007575","#008585","#009e9e","#00b8b8","#00d1d1","#00ebeb"], 
			}]
		},
		options:{
			legend:{
				position:"left"
			}
		}
	});
	//console.log(provinces,pop)
	//end of pieChart

	var ctx = document.getElementById("pChart")
	var pChart = new Chart(ctx,{
		type: "horizontalBar",
		data:{
			labels: provinces,
			datasets: [{
				label:"population",
				data:pop,
				backgroundColor:["#008585","#009e9e","#00b8b8","#00d1d1"],
			}]
		},
		options:{
			scales:{
				xAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:200000,
						maxTicksLimit:8,
					}
				}]
			},
			legend:{
				display:false,
			}
		}
	});

//end of pChart
	
	var ctx = document.getElementById("bChart")
	var bChart = new Chart(ctx,{
		type: "bar",
		data:{
			labels: provinces2,
			datasets:[{
				label:"Birth Rate 2019",
				data: b_2019,
				backgroundColor: "#009e9e",
			},
			{
				label:"Birth Rate 2020",
				data:b_2020,
				backgroundColor:"#00d1d1",
			}]
		},
		options:{
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:8,
					}
				}]
			},
			legend:{
				labels:{
					fontColor:"#665d1e",
					fontSize: 22,
					fontStyle: "bold"
				}
			}
		}
	});