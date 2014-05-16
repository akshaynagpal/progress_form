$(document).ready(function(){
	$("#reg_form").keyup(function(){
			var numValid=0;
			$("#reg_form input[required]").each(function(){
				if (this.validity.valid)
					{ numValid++; }
			});

			var prog = $("#progress") , progMsg = $("#progress_message");
			if(numValid==1)
				{
					prog.attr("value","25");
					progMsg.text("25 % Well begun is half done!");
				}
				if(numValid==2)
				{
					prog.attr("value","50");
					progMsg.text("50 % Great! just a bit left!");
				}
				if(numValid==3)
				{
					prog.attr("value","75");
					progMsg.text("75 % Almost there!");
				}
				if(numValid==4)
				{
					prog.attr("value","100");
					progMsg.text("100 % You did it!! :)");
				}

	});

});
