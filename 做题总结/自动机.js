class Automaton {
  constructor() {
    this.state = 'start';
    this.sign = 1;
    this.ans = 0;
    this.table = {
      'start': ['start', 'signed', 'in_number', 'end'],
      'signed': ['end','end', 'in_number', 'end'],
      'in_number': ['end', 'end','in_number' ,'end'],
      'end': ['end', 'end','end' ,'end']
    }
  }
  get_col(c) {
    let col_index
    const numReg = /\d{1}/;
    if(c === '') {
      col_index = 0
    } else if(c === '+' || c === '-') {
      col_index = 1
    } else if(numReg.test(c)) {
      col_index = 2
    } else {
      col_index = 3
    }
   return col_index
  }
  get(c) {
    this.state = this.table[this.state][this.get_col(c)]
    if(this.state === 'in_number') {
      this.ans = this.ans * 10 + c
    }
    if(this.state === 'signed') {
      this.sign = c === '+' ? 1 : -1;
    }
  }
}
class solution {
  myAtoi() {
    
  }
}