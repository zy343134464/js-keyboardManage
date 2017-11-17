// 初始化数据

var myInit = init()
var keys = myInit['keys']
var hash = myInit['hash']

// 监听键盘
listenKeyboard(hash)

function getLocalStorge(name){
	return JSON.parse(localStorage.getItem(name) || null)
}

function grow(tagName){
	return document.createElement(tagName)
}


function createKbd(textContent){
	var myKbd = grow('kbd')
	myKbd.textContent = textContent
	myKbd.className = 'key'
	return myKbd
}

function createButton(id){
	var myButton = grow('button')
	myButton.textContent = '编辑'
	myButton.id = id
	myButton.onclick = function(event){
		var key = event['target']['id']
		var x = prompt('请编辑您的网站')
		hash[key] = x
		localStorage.setItem('mima',JSON.stringify(hash))
	}
	return myButton
}

function createImg(src){
	var img = grow('img')
	img.src = 'http://' + src + '/favicon.ico'
	return img
}		

function init(){
	var keys = {
		'0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
		'1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
		'2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
		length:3
	}

	var hash = {'q':'qq.com','w':'weibo.com','e':'ele.me','r':'renren.com','t':'taobao.com','y':'yahu.com','u':'uc.com',
		'i':'iqiyi.com','o':'oppo.com','p':'photo.poco.cn','a':'apple.com','s':'sohu.com','m':'meituan.com'
	}

	var hashInlocalStorage = getLocalStorge('mima')
	if (hashInlocalStorage) {
		hash = hashInlocalStorage
	}

	for (var index = 0; index < keys['length']; index = index + 1) {
		var wrapDiv = grow('div')
		wrapDiv.className = 'row'

		keyBoard.appendChild(wrapDiv)

		var row = keys[index] 
		for (var index2 = 0;index2 < row['length']; index2 = index2 + 1) {
			var myKbd = createKbd(row[index2])

			var myButton = createButton(row[index2])
			
			var img = createImg(hash[row[index2]])

			myKbd.appendChild(img)
			myKbd.appendChild(myButton)
			wrapDiv.appendChild(myKbd)
		}
	}

	return {
		'keys':keys,
		'hash':hash
	}
}

function listenKeyboard(hash){
	document.onkeypress = function(event){
		key = event['key']
		website = hash[key]
		window.open('http://'+website,'_blank')
	}
}