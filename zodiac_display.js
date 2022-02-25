var zodiac = [
	{
		sign: "aquarius",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "aries",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "cancer",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "capricorn",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "gemini",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "leo",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "libra",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "pisces",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "scorpio",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "taurus",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	},
	{
		sign: "virgo",
		fortune: "text",
		image: "https://cdn.discordapp.com/attachments/944000709928562758/944001889815629844/beidou.gif"
	}
]

function zodiaac(){
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i=0; i < zodiac.length; i++){
		if(sign === zodiac[i].sign){
			document.getElementById("yourSign").innerHTML = zodiac[i].sign.toUpperCase()
			document.getElementById("popOut").src = zodiac[i].image
			document.getElementById("yourZodiac").innerHTML = "text: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "Please try again if you typed something incorrectly."
			document.getElementById("popOut").src = ""
			document.getElementById("yourZodiac").innerHTML = ""
		}
	}
};