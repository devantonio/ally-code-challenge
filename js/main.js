

let tabs =  $(".tabs li a");
  
tabs.click(function() {
	tabs.removeClass("active");
	$(this).addClass("active");

if($(this).attr("id") == "tab-one"){
	$("#sec-one").css("display", "block");
	$("#sec-two").css("display", "none");
} else if($(this).attr("id") == "tab-two"){
	$("#sec-two").css("display", "block");
	$("#sec-one").css("display", "none");
	}
});


let nav_links =  $("#nav li a");
  
	nav_links.click(function() {
	nav_links.removeClass("selected");
	$(this).addClass("selected");

});


$("#mobile-menu").click(function(){
 	$("#side-nav").addClass("open");
 });

$("#close-menu").click(function(){
	$("#side-nav").addClass("close");
	$("#side-nav").removeClass("open");
});


let login_btn = document.getElementById("login-btn");
let modal = document.getElementById("modal");
let bkgrnd_modal = document.getElementById("modal-bkgrnd");
let close_modal = document.getElementById("close-modal");

close_modal.addEventListener("click", function(){
	modal.classList.remove('show-modal');
	bkgrnd_modal.classList.remove('show-modal');
});


login_btn.addEventListener("click", function() {
	modal.classList.add('show-modal');
	bkgrnd_modal.classList.add('show-modal');
});





		//SEND REQUEST TO THE JSON FILE FOR THE APPROPRIATE DATA
		const request = new XMLHttpRequest();
		request.open('GET', 'code-test.json', true);

		request.onload = function() {
		 if (request.status >= 200 && request.status < 400) {
		 //    // Success!
		   let data = JSON.parse(request.responseText);
 			table = document.getElementById('table');
										table.innerHTML = ` 

										<thead id="thead">
    										<tr>
    											<td></td>
      											<td>Annual Percentage Yield</td>
     											<td>Est. Earnings for 1 Year*</td>
    										</tr>
  										</thead>

 											<tr id="row" style="background-color: #ECF6EE;">
												<th scope="row">${data[2].name}</th>
												<th scope="row">${data[2].apy}%</th>
												<th scope="row">$${data[2].earnings.toFixed(2)}</th>
 											<tr>
 											<tr id="row" style="background-color: #DEEBE2;">
 												<td>${data[0].name}</td>
 												<td>${data[0].apy}%</td>
 												<td>$${data[0].earnings.toFixed(2)}</td>
 											<tr>
 											<tr id="row" style="background-color: #ECF6EE;">
 												<td>${data[1].name}</td>
 												<td>${data[1].apy}%</td>
 												<td>$${data[1].earnings.toFixed(2)}</td>
 											<tr>
 											<tr id="row" style="background-color: #DEEBE2;">
 												<td>${data[3].name}</td>
 												<td>${data[3].apy}%</td>
 												<td>$${data[3].earnings.toFixed(2)}</td>
 											<tr>
 											<tr id="row" style="background-color: #ECF6EE;">
 												<td>${data[4].name}</td>
 												<td>${data[4].apy}%</td>
 												<td>$${data[4].earnings.toFixed(2)}</td>
 											<tr>
											<tfoot id="tfoot">
										    <tr>
    											<td></td>
      											<td></td>
    										    <td>Based on $50,000 deposit.</td>
    										</tr>
  										</tfoot>

 											`;
	
		  } 
		};

		request.onerror = function() { 
		  console.error('There was a connection error of some sort');
		};

		request.send();
