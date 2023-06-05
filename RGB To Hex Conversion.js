function rgb(r, g, b) {
    // Ensure that the RGB values are within the valid range (0-255)
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    // Convert the decimal values to uppercase hexadecimal strings
    var hexR = r.toString(16).padStart(2, '0').toUpperCase();
    var hexG = g.toString(16).padStart(2, '0').toUpperCase();
    var hexB = b.toString(16).padStart(2, '0').toUpperCase();
  
    // Return the concatenated hexadecimal string
    return hexR + hexG + hexB;
  }
  