$(function() {

	var start = new Date;

	setInterval(function() {
		$('#dateTime').text(getThaiDate());
	}, 1000);

	var socket = io();
	//socket.emit('hi', 'Yo Yo');
	//socket.emit('reload');
	//socket.emit('info');
	//socket.on('info', function(msg){
		//console.log(msg);
		//socket.emit('hi', 'Yo Yo');
	//});
	/*socket.on('hi', function(msg){
	});*/

});

function getThaiDate(){
	var dayTh = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
	var monthTh = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
	var d = new Date();
	return 'วัน'+dayTh[d.getDay()]+'ที่ ' +d.getDate()+' '+monthTh[d.getMonth()]+' '+(d.getFullYear()+543) + ' เวลา '+(d.getHours() < 10 ? '0' : '')+d.getHours()+':'+(d.getMinutes() < 10 ? '0' : '')+d.getMinutes()+':'+(d.getSeconds() < 10 ? '0' : '')+d.getSeconds();
}