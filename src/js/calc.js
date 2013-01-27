var calcInputFlag = 0;
var retArr;
retArr = new Array(3);

var calcReturn;
calcReturn = new Array(2);

// 計算
function calc(arr)
{
	calcReturn[0] = arr[0];
	calcReturn[0] += arr[1];
	calcReturn[0] += arr[2];

	if (arr[1] == "+")
	{
		calcReturn[1] = Number(arr[0]) + Number(arr[2]);
	}
	else if(arr[1] == "-")
	{
		calcReturn[1] = Number(arr[0]) - Number(arr[2]);
	}
	else if(arr[1] == "*")
	{
		calcReturn[1] = Number(arr[0]) * Number(arr[2]);
	}
	else if(arr[1] == "/")
	{
		calcReturn[1] = Number(arr[0]) / Number(arr[2]);
	}
	calcReturn;
}

// 入力
function input(obj)
{
	if (obj == "=")
	{
		calcInputFlag = 2;
		// 計算
		return retArr;
	}
	if(calcInputFlag == 2
	 || obj == "C")
	{
		// 計算済み or Clear
		retArr[0] = 0;
		retArr[1] = "";
		retArr[2] = 0;
		calcInputFlag = 0;
	}
	else if(obj == "±")
	{
		// 反転
		if (calcInputFlag = 0)
		{
			retArr[0] = Number(retArr[0]) * (-1);
		} else
		{
			retArr[2] = Number(retArr[2]) * (-1);
		}
	}
	else if (obj == "+"
		|| obj == "-"
		|| obj == "*"
		|| obj == "/")
	{
		//演算子
		calcInputFlag = 1;
		if ("÷")
		{
			obj = "*";
		}
		retArr[1] = obj;
	}
	else
	{
		// 数値 or dot
		if (calcInputFlag = 0)
		{
			retArr[0] += obj;
		} else
		{
			retArr[2] += obj;
		}
	}
}