class Matrix{
    constructor(row, column){
        this.matrix = new Array(column);
        this.column = column;
        this.row = row;

        for(let i = 0; i < row; i++)
            this.matrix[i] = new Array(column);
        this.initZero()
    }

    initZero(){
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.column; k++)
                this.matrix[i][k] = 0;
        }  
        return this.matrix;
    }

    initRandom(){
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.column; k++)
            this.matrix[i][k] = Math.random(10);
        } 
        return this.matrix;
    }

    getRow(n){
        return this.matrix[n];
    }

    setValue(row,column, value){
        this.matrix[row][column] = value;
    }

    getCol(n){
        let col = new Array(this.row)
        for(let k = 0; k < this.row; k++)
            col[k] = this.getRow(k)[n];
        return col;
    }

    isSquared(){//2x2 devolver true or false
        if(this.row == this.column)
            return true
        return false
    }
    
    isSymmetric(){
        for(let i = 0; i < this.row; i++){
            for(let k = 1; k < this.row; k++){
                //console.log('['+k+']'+'['+i+']:' + this.matrix[i][k] + ' != ' + '['+k+']'+'['+i+']:' + this.matrix[k][i])
                if(this.matrix[i][k] != this.matrix[k][i] && k!=i)
                    return false;
            }                
        }
        return true
    }

    isIdentity(){
        for(let i = 0; i < this.row; i++){
            for(let k = 1; k < this.row; k++){
                //console.log('['+k+']'+'['+i+']:' + this.matrix[i][k] + ' != ' + '['+k+']'+'['+i+']:' + this.matrix[k][i])
                if(this.matrix[i][k] != 0 && this.matrix[k][i] != 0 && k!=i)
                    return false;
            }                
        }
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.row; k++){
                if(this.matrix[i][k] != 1 && k==i)
                    return false                   
            }            
        }
        return true
    }

    getData(matrix=this.matrix){
        return matrix;
    }

    /*Optional
    getDiagonal(){
        
    }*/
}

class Calendar{
    constructor(day= new Date().getDate(), month = new Date().getMonth(), year = new Date().getFullYear()){
        this.day = day;
        this.month = month;
        this.year = year;
        this.calendar = new Matrix(6,7)
        console.log(this.day + '-' + this.month + '-' + this.year)
    }

    printCalendar(y=this.year, m=this.month){//return Matrix
        this.calendar.initZero()
        let cal = new Matrix(6,7)
        cal.initZero()
        cal = this.daysNameForCalendar()
        let firstDay = this.firstDayMonth(y, m);

        let day = 1;
        for(let i = 0; i < 6; i++){
            for(let k = 0; k < 7; k++){
                if((k+firstDay) == 7 && i == 0)
                    break;
                if(i == 0){
                    cal.getRow(i+1)[k+firstDay] = day
                }                    
                else if((i+1) != 6){
                    cal.getRow(i+1)[k] = day;
                    if(day > this.howManyDays(m, y))
                        cal.getRow(i+1)[k] = 0;
                }                
                day++;
            }                
        }

        return cal.getData();
    }

    isLeapYear(y){
        if(y % 400 == 0){
            return true;
        }
        else if(y % 100 == 0){
            return true;
        }
        else if(y % 4 == 0){
            return true;
        }else
            return false;
    }

    todayPlus(d, n){//return int
        return (d + n) % 7;
    }

    firstDayMonth(year=this.year, month=this.month){
        return new Date(year, month-1).getDay()
    }

    firstDayYear(y){//return int
        return (y + Math.floor((y-1) / 4) - Math.floor((y-1/100)) + Math.floor((y-1/400))) % 7
    }

    januaryFirst(y){
        return (y + Math.floor((y-1) / 4) - Math.floor((y-1/100)) + Math.floor((y-1/400))) % 7
    }

    howManyDays(y,m){
        return new Date(y,m,0).getDate()
    }
    
    daysNameForCalendar(){
        for(let i = 0; i < 7; i++){
            this.calendar.getRow(0)[i] = this.getDayName(i)
        }
        return this.calendar;        
    }

    getDayName(x){         
        switch(x){
            case 0: 
                return "Sunday";
            case 1: 
                return "Monday";
            case 2: 
                return "Tuesday";
            case 3: 
                return "Wednesday";
            case 4: 
                return "Thursday";
            case 5: 
                return "Friday";    
            default:
                return 'Saturday'
        }
    }

}
(()=>{
    c = new Calendar()
    console.table(c.printCalendar())
})()
