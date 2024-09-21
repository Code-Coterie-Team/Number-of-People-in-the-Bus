function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }
  
    let count = 1; 
    let heightAfterBounce = h * bounce;
  
    
    while (heightAfterBounce > window) {
      count += 2; 
      heightAfterBounce *= bounce; 
    }
  
    return count;
}