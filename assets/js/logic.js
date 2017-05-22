$(document).ready(function() {
	var statistics = [];
	var defendList = [];
	var fightList = [];
	var enemyList = [];
	var deadList = [];
	var dexter = {name: "Dexter Jettser", defend: 500, attack: 10, mulitplier: 1.2}
	var	ewok = {name: "Ewok", defend: 150, attack: 20, mulitplier: 4}
	var	jar = {name: "Jar Jar Binks", defend: 400, attack: 30, mulitplier: 1.1}
	var	watto = {name: "Watto", defend: 250, attack: 40, mulitplier: 1.2}
	var imgFightName = "";
	var imgDefendName = "";

	statistics.push(dexter, ewok, jar, watto);
	bringImages(statistics, "#fightPhoto");


    $('#fightPhoto').on('click', 'img', function() {
    	if ($("#defendPhoto img").length > 0) {
    		enemyList[0].defend = enemyList[0].defend - Math.floor(fightList[0].attack);
    		fightList[0].defend = fightList[0].defend - Math.floor(enemyList[0].attack);
    		fightList[0].attack = fightList[0].attack * fightList[0].mulitplier;
    		$('#defendPhoto').html('');
    		$('#defendPhoto').html('<h2>Enemy</h2>');
    		bringImages(enemyList, "#defendPhoto");
    		$('#defendPhoto').append('<p>' + enemyList[0].name + '&#39;s attack power: ' + Math.floor(enemyList[0].attack)+ '</p>');
    		$('#fightPhoto').html('');
    		$('#fightPhoto').html('<h2>Fighter</h2>');
    		bringImages(fightList, "#fightPhoto");
    		$('#fightPhoto').append('<p>' + fightList[0].name + '&#39;s attack power: ' + Math.floor(fightList[0].attack) + '</p>');
    		if (fightList[0].defend <= 0) {
    			if (enemyList[0].defend <= 0 && deadList.length === 2) {
					$('#enemyPhoto').html('<h1>You Tie?<br>Both Fighters Died!<br>Press  Space or Refresh to Replay</h1>');
		    		$('#fightPhoto').html('');
		    		$('#headSection').html('<h1>Star Wars RGP</h1>');
		    		$('#defendPhoto').html('');
		    		$(window).keypress(function (e) {
						if (e.keyCode === 0 || e.keyCode === 32) {
							e.preventDefault();
							location.reload();
						}
					})
	    		} else {
	    			$('#enemyPhoto').html('<h1>You Lose!<br>Press Space or Refresh to Replay</h1>');
		    		$('#fightPhoto').html('');
		    		$('#headSection').html('<h1>Star Wars RGP</h1>');
		    		$('#defendPhoto').html('');
		    		$(window).keypress(function (e) {
						if (e.keyCode === 0 || e.keyCode === 32) {
							e.preventDefault();
							location.reload();
						}
					})
	    		}
	    	} else if (enemyList[0].defend <= 0) {
    			deadList.push(enemyList[0]);
    			enemyList.splice(0, 1);
	    		$('#defendPhoto').html('');
	    		$('#defendPhoto').append('<p>Select an enemy to fight!</p>');
	    		if (deadList.length === 3) {
		    		$('#fightPhoto').html('');
		    		$('#defendPhoto').html('');
		    		$('#headSection').html('<h1>Star Wars RGP</h1>');
		    		$('#enemyPhoto').html('<h1>You Win!<br>Press Space or Refresh to Replay</h1>');
		    		$(window).keypress(function (e) {
						if (e.keyCode === 0 || e.keyCode === 32) {
							e.preventDefault();
							location.reload();
						}
					})
		    	}
	    	}
    	}

    	if ($("#fightPhoto img").length > 1) {
    		$("#fightSection").removeClass("col-xs-12").removeClass("col-offset-xs-12").addClass("col-xs-6");
    		$("#defendSection").removeClass("col-xs-0").addClass("col-xs-6");
    		$("#defendSection").css("display", "unset");
    		$("#enemySection").css("display", "unset");
    		imgFightName = $(this).attr('src').split('\/');
    		imgFightName = imgFightName[imgFightName.length-1]
    		imgFightName = imgFightName.slice(0, -4)
    		$('#defendPhoto').append('<p>Select an enemy to fight!</p>');
			switch (imgFightName) { 
				case 'Dexter Jettser':
					fightList.push(dexter);
					$('#fightPhoto').html('');
					$('#fightPhoto').html('<h2>Fighter</h2>');
					bringImages(fightList, "#fightPhoto");
					$('#fightPhoto').append('<p>' + fightList[0].name + '&#39;s attack power: ' + Math.floor(fightList[0].attack) + '</p>');
					defendList.push(ewok, jar, watto);
					bringImages(defendList, "#enemyPhoto");
					break;
				case 'Ewok':
					fightList.push(ewok);
					$('#fightPhoto').html('');
					$('#fightPhoto').html('<h2>Fighter</h2>');
					bringImages(fightList, "#fightPhoto");
					$('#fightPhoto').append('<p>' + fightList[0].name + '&#39;s attack power: ' + Math.floor(fightList[0].attack) + '</p>');
					defendList.push(dexter, jar, watto);
					bringImages(defendList, "#enemyPhoto");
					break;
				case 'Jar Jar Binks':
					fightList.push(jar);
					$('#fightPhoto').html('');
					$('#fightPhoto').html('<h2>Fighter</h2>');
					bringImages(fightList, "#fightPhoto");
					$('#fightPhoto').append('<p>' + fightList[0].name + '&#39;s attack power: ' + Math.floor(fightList[0].attack) + '</p>');
					defendList.push(dexter, ewok, watto);
					bringImages(defendList, "#enemyPhoto");
					break;		
				case 'Watto':
					fightList.push(watto);
					$('#fightPhoto').html('');
					$('#fightPhoto').html('<h2>Fighter</h2>');
					bringImages(fightList, "#fightPhoto");
					$('#fightPhoto').append('<p>' + fightList[0].name + '&#39;s attack power: ' + Math.floor(fightList[0].attack) + '</p>');
					defendList.push(dexter, ewok, jar);
					bringImages(defendList, "#enemyPhoto");
					break;
				default:
					alert('Error');
			}
		}
	})



	$('#enemyPhoto').on('click', 'img', function() {
    	if ($("#defendPhoto img").length < 1) {
    		imgDefendName = $(this).attr('src').split('\/');
    		imgDefendName = imgDefendName[imgDefendName.length-1]
    		imgDefendName = imgDefendName.slice(0, -4)
    		$('#headSection').html('<h1>Star Wars RGP</h1><h2><br>Click the image of your fighter to attack!<br>Win by defeating all enemies.</h2>');
			switch (imgDefendName) { 
				case 'Dexter Jettser':
					enemyList.push(dexter);
					$('#defendPhoto').html('');
					$('#defendPhoto').html('<h2>Enemy</h2>');
					bringImages(enemyList, "#defendPhoto");
					$('#defendPhoto').append('<p>' + enemyList[0].name + '&#39;s attack power: ' + Math.floor(enemyList[0].attack)+ '</p>');
					defendList = [];
					defendList.push(ewok, jar, watto);
					defendList.splice(defendList.indexOf(fightList[0]), 1);
					switch (deadList.length) {
						case 1:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							break;
						case 2:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							defendList.splice(defendList.indexOf(deadList[1]), 1);
							break;
					}
					$('#enemyPhoto').html('');
					$('#enemyPhoto').html('<h2>Next to Fight</h2>');
					bringImages(defendList, "#enemyPhoto");
					break;
				case 'Ewok':
					enemyList.push(ewok);
					$('#defendPhoto').html('');
					$('#defendPhoto').html('<h2>Enemy</h2>');
					bringImages(enemyList, "#defendPhoto");
					$('#defendPhoto').append('<p>' + enemyList[0].name + '&#39;s attack power: ' + Math.floor(enemyList[0].attack)+ '</p>');
					defendList = [];
					defendList.push(dexter, jar, watto);
					defendList.splice(defendList.indexOf(fightList[0]), 1);
					switch (deadList.length) {
						case 1:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							break;
						case 2:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							defendList.splice(defendList.indexOf(deadList[1]), 1);
							break;
					}
					$('#enemyPhoto').html('');
					$('#enemyPhoto').html('<h2>Next to Fight</h2>');
					bringImages(defendList, "#enemyPhoto");
					break;
				case 'Jar Jar Binks':
					enemyList.push(jar);
					$('#defendPhoto').html('');
					$('#defendPhoto').html('<h2>Enemy</h2>');
					bringImages(enemyList, "#defendPhoto");
					$('#defendPhoto').append('<p>' + enemyList[0].name + '&#39;s attack power: ' + Math.floor(enemyList[0].attack)+ '</p>');
					defendList = [];
					defendList.push(dexter, ewok, watto);
					defendList.splice(defendList.indexOf(fightList[0]), 1);
					switch (deadList.length) {
						case 1:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							break;
						case 2:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							defendList.splice(defendList.indexOf(deadList[1]), 1);
							break;
					}
					$('#enemyPhoto').html('');
					$('#enemyPhoto').html('<h2>Next to Fight</h2>');
					bringImages(defendList, "#enemyPhoto");
					break;		
				case 'Watto':
					enemyList.push(watto);
					$('#defendPhoto').html('');
					$('#defendPhoto').html('<h2>Enemy</h2>');
					bringImages(enemyList, "#defendPhoto");
					$('#defendPhoto').append('<p>' + enemyList[0].name + '&#39;s attack power: ' + Math.floor(enemyList[0].attack)+ '</p>');
					defendList = [];
					defendList.push(dexter, ewok, jar);
					defendList.splice(defendList.indexOf(fightList[0]), 1);
					switch (deadList.length) {
						case 1:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							break;
						case 2:
							defendList.splice(defendList.indexOf(deadList[0]), 1);
							defendList.splice(defendList.indexOf(deadList[1]), 1);
							break;
					}
					$('#enemyPhoto').html('');
					$('#enemyPhoto').html('<h2>Next to Fight</h2>');
					bringImages(defendList, "#enemyPhoto");
					break;
				default:
					alert('Error');
			}
		}
	})


   	function bringImages(arr, idName){
   		$.each(arr,function(index, value) {
			$(idName).append('<div class="individualImage">\n<img id="' + value.name + '" src="assets/images/' + value.name + '.jpg" alt="' + value.name + '">\n<div class="imageText">\n<p>'+ value.name + '<br>Health: '+ value.defend + '</p>\n</div>\n</div>');
		});
	}
});