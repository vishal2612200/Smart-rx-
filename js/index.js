/*
	global json data
	json file is not imported as cors-policy of browser will
	not have allowed it without proper server configuration
	so we are using this global variable to store json data
*/
var json_data = {
    "Heading": "MEDICATIONS",
    "SubHeading": "Active Medications",
    "SubHeadingIcon": "",
    "PName": "Joyneel Acharya",
    "Gender": "Male",
    "Age": "16 May 1991",
    "DateOfIssue": "30 Nov 2020",
    "ReferredBy": "Self",
    "ResultCount": "3",
    "results": [
      {
        "RowHeading": "ibuprofen 600mg tab",
        "ColumnData": [
          {
            "UpperHeading": ["Side A", "Side B"],
            "UpperHeadingIcons": ["fa-user", "fa-car"],
            "LowerHeading": "REASON FOR MEDICATION",
            "LowerHeadingReason": "For treatment of lower back pain."
          },
          {
              "Heading": "DIRECTIONS / NOTES",
              "SubHeading": "1 tablet by mouth 4 times a day with food every 4 hours",
              "Description": "",
              "TimelineIcons": {
					"First": ["fa-car"],
					"Second": ["fa-car"],
					"Third": ["fa-car"],
					"Fourth": ["fa-car"]
				},
                "TimelineText": {
					"First": "8:00AM",
					"Second": "12:00PM",
					"Third": "4:00PM",
					"Fourth": "8:00PM"
				},
              "TimelineFrontIcon": "fa-sun-o",
              "TimelineBackIcon": "fa-moon-o"
          },
          {
            "UpperHeading": "POSSIBLE SIDE EFFECTS",
            "UpperHeadingList": ["Headache", "Dizziness"],
            "UpperHeadingIcons": ["fa-user", "fa-car"],
            "LowerHeading": "GET MEDICAL HELP IF",
            "LowerHeadingReason": "Experiencing chest pain, shortness of breath, and rapid weight gain."
          }
        ]
            
      },
      {
        "RowHeading": "insulin, glargine, human 100 unt/ml inj",
        "ColumnData": [
            {
            "UpperHeading": ["APPEARANCE"],
            "UpperHeadingIcons": [""],
            "LowerHeading": "REASON FOR MEDICATION",
            "LowerHeadingReason": "Reduce blood pressure."
            },
            {
                "Heading": "DIRECTIONS / NOTES",
                "SubHeading": "1 injection at bedtime",
                "Description": "Inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins/discard open vials after 28 days.",
                "TimelineIcons": {
					"First": [],
					"Second": [],
					"Third": [],
					"Fourth": ["fa-user", "fa-user", "fa-user"]
				},
                "TimelineText": {
					"First": "",
					"Second": "",
					"Third": "",
					"Fourth": "Bedtime"
				},
                "TimelineFrontIcon": "fa-sun-o",
                "TimelineBackIcon": "fa-moon-o"
            },
            {
            "UpperHeading": "POSSIBLE SIDE EFFECTS",
            "UpperHeadingList": ["Headache", "Fatigue", "Nausea"],
            "UpperHeadingIcons": ["fa-mail-reply", "fa-map-marker", "fa-pencil"],
            "LowerHeading": "GET MEDICAL HELP IF",
            "LowerHeadingReason": "Experiencing itching skin, wheezing, and fast heart rate."
            }
        ]
                
      },
      {
        "RowHeading": "terazosin hcl 2mg capsule",
        "ColumnData": [
            {
            "UpperHeading":  ["Side A", "Side B"],
            "UpperHeadingIcons": ["fa-medkit", "fa-medkit"],
            "LowerHeading": "REASON FOR MEDICATION",
            "LowerHeadingReason": "For treatment of symptoms of an enlarged prostate."
            },
            {
                "Heading": "DIRECTIONS / NOTES",
                "SubHeading": "3 capsules before bed",
                "Description": "",
                "TimelineIcons": {
					"First": [],
					"Second": [],
					"Third": [],
					"Fourth": ["fa-user", "fa-user", "fa-user"]
				},
                "TimelineText": {
					"First": "",
					"Second": "",
					"Third": "",
					"Fourth": "Bedtime"
				},
                "TimelineFrontIcon": "fa-sun-o",
                "TimelineBackIcon": "fa-moon-o"
            },
            {
            "UpperHeading": "POSSIBLE SIDE EFFECTS",
            "UpperHeadingList": ["Dizziness", "Headache", "Constipation", "Loss of appetite", "Fatigue"],
            "UpperHeadingIcons": ["fa-rocket", "fa-paperclip", "fa-file", "fa-cut", "fa-undo"],
            "LowerHeading": "",
            "LowerHeadingReason": ""
            }
        ]
                    
       }

    ]
     
  }
$(document).ready(function(){
	
	// Approach 1: Assign value directly to tags
	$('.heading').text(json_data.Heading);
	$('.subheading').text(json_data.SubHeading + "(" + json_data.ResultCount + ")");
	$('.footersubheading').text(json_data.SubHeading);
    $('.pname').text(json_data.PName);
	$('.age').text(json_data.Age);
	$('.dateofissue').text(json_data.DateOfIssue);

	// initialize the counter for row in middle section
	var count = 0

	// iterate through the results
	json_data.results.forEach(function(data) {
		
		// main div str that will be appended to the middle section of the page
		var divstr = `
		<div class="row">
	<!-- Added test-uppercase class for uppercase text -->
	<div class="col-sm-10">
  		<h4 class="text-uppercase">${data.RowHeading}</h4>
	</div>
    <div class="col-sm-3">
		<div class="row">
			<div class="col-sm-12">
				`
		// condition to check if there is a two column or one column data
        if(data.ColumnData[0].UpperHeading.length == 1) {
			divstr += `<div class="box">
			    	   <h4 class="text-usercase grey">${data.ColumnData[0].UpperHeading[0]}</h4>
						<div class="text-center">
								<i class="fa fa-car fa-4x" aria-hidden="true"></i>
						</div>
					   </div>`
		}
		else{
			divstr +=`
				<div class="row">
					<div class="col-sm-6">
						<h4 class="text-center text-usercase grey">SIDE A</h4>
						<div class="text-center">
			        		<i class="fa ${data.ColumnData[0].UpperHeadingIcons[0]} fa-4x" aria-hidden="true"></i>
						</div>
					</div>
					<div class="col-sm-6">
						<h4 class="text-center text-usercase grey">SIDE B</h4>
			        	<div class="text-center">
			        		<i class="fa ${data.ColumnData[0].UpperHeadingIcons[1]} fa-4x" aria-hidden="true"></i>
						</div>
					</div>
				</div>`
		}
			// concat the lower heading for column 1
			divstr  +=	`<hr >
				<div class="box">
					<h5 class="text-usercase grey">${data.ColumnData[0].LowerHeading}</h5>
					<span style="font-size:17px">${data.ColumnData[0].LowerHeadingReason}</span>
				</div>
			</div>
		</div>
	</div>
    <div class="col-sm-6 center-div" >
		<div class="col-sm-12">
		<div class="box">
		<h4 class="text-usercase grey">${data.ColumnData[1].Heading}</h4>
		<h3>
		`
	
	// Condition to check if there is a number in the subheading of column 2 description
	// If it is a number make it bold, other wise leave it alone
	var sub_heading = data.ColumnData[1].SubHeading.split(" ");
    for (var item = 0; item < sub_heading.length; item++) {
		
		if(!isNaN(sub_heading[item])){
			divstr += ` <b>` + sub_heading[item] + `</b>`
		}
		else{
			divstr += ` ` + sub_heading[item]
		}
	}

	// Add the description of column 2	
	divstr +=	`</h3>
		<p>${data.ColumnData[1].Description}</p>
		</div>
		<div class="row">
			<div class="col-sm-1">
			</div>
			<div class="col-sm-10" style="height:50px, font-size:large;">
				<div class="col-sm-3 ">	
					<div class="text-center">`
				
				// for loop for timelineIcons for first column
				for(let i = 0; i < data.ColumnData[1].TimelineIcons.First.length; i++) {
					divstr += `<span><i class="fa ${data.ColumnData[1].TimelineIcons.First[i]} fa-2x" style="margin-right:8px;"></i></span>`
				}
					
				divstr	+= `
					</div>
				</div>
				<div class="col-sm-3">	
					<div class="text-center">`

				// for loop for timelineIcons for second column
				for(let i = 0; i < data.ColumnData[1].TimelineIcons.Second.length; i++) {
					divstr += `<span><i class="fa ${data.ColumnData[1].TimelineIcons.Second[i]} fa-2x" style="margin-right:8px;"></i></span>`
				}
					
			divstr += `
						
					</div>
				</div>
				<div class="col-sm-3">	
					<div class="text-center">`
				// for loop for timelineIcons for third column
				for(let i = 0; i < data.ColumnData[1].TimelineIcons.Third.length; i++) {
					divstr += `<span ><i class="fa ${data.ColumnData[1].TimelineIcons.Third[i]} fa-2x" style="margin-right:8px;"></i></span>`
				}
					
				divstr +=`
				  		
					</div>
				</div>
				<div class="col-sm-3 ">	
					<div class="text-center">`
				// for loop for timelineIcons for fourth column
				for(let i = 0; i < data.ColumnData[1].TimelineIcons.Fourth.length; i++) {
					divstr += `<span><i class="fa ${data.ColumnData[1].TimelineIcons.Fourth[i]} fa-2x" style="margin-right:8px;"></i></span>`
				}
					
				divstr +=	`
						
					</div>
				</div>

			</div>
			
			<div class="col-sm-1">
			</div>
		</div>
		<br><br>
		<div class="row" >
			<div class="col-sm-1">
				<div class="text-center">
					<i class="fa ${data.ColumnData[1].TimelineFrontIcon} fa-2x" style="margin-left:-50%" aria-hidden="true"></i>
				</div>
			</div>
			<div class="col-sm-10" style="background-color:#dbd5d5;height:25px, font-size:large;">
				<div class="col-sm-3" style="border-right: 1px dotted;">	
					<div class="text-center ">
						${data.ColumnData[1].TimelineText.First} 
					</div>
				</div>
				<div class="col-sm-3 center-div">	
					<div class="text-center">
						${data.ColumnData[1].TimelineText.Second}
					</div>
				</div>
				<div class="col-sm-3 center-div">	
					<div class="text-center">
				  		${data.ColumnData[1].TimelineText.Third} 
					</div>
				</div>
				<div class="col-sm-3" style="border-left: 1px dotted;">	
					<div class="text-center">
						 ${data.ColumnData[1].TimelineText.Fourth}
					</div>
				</div>
			</div>
			<div class="col-sm-1">
				<div class="text-center">
					<i class="fa ${data.ColumnData[1].TimelineBackIcon} fa-2x" aria-hidden="true"></i>
				</div>
			</div>

		</div>
		</div>
	</div>
    <div class="col-sm-3">
		<div class="box">
			<h4 class="text-usercase grey">${data.ColumnData[2].UpperHeading}</h4>
			`
		// For loop to append list list with text in the third column
		for(let i = 0; i < data.ColumnData[2].UpperHeadingList.length; i++) {
			divstr += `<h4 class="bold"><i class="fa ${data.ColumnData[2].UpperHeadingIcons[i]}" style="margin-right:8px;"></i> ${data.ColumnData[2].UpperHeadingList[i]}</h4>`
		}
    		
	divstr += `
		</div>
		<div class="box" style="margin-top:15%">
			<h4 class="text-usercase grey">${data.ColumnData[2].LowerHeading}</h4>
			<p><i>${data.ColumnData[2].LowerHeadingReason}</i></p>
		</div>
	</div>
  </div>
  <hr>
	`
		// Append whole row into the middle section
		$(".middlesection").append(divstr);

		// Increase counter for row count
		count+=1
		
	});
});
