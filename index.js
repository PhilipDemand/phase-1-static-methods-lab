class Formatter {
  static capitalize(string) {
    const newString = string.substring(1)
    const newerString = (string[0].toUpperCase()) + newString
    return newerString
  }
  static sanitize(string) {
    const evenNewerString = string.replace(/[^a-zA-Z0-9-'\s]/g, "");
    return evenNewerString
  }
  static titleize(string) {
    let upper = string.replace(/(\b[a-z])/g, c => c.toUpperCase());
    let andDown = upper.replace(
      /((The|And|From|But|An|Of|A|For|At|By)((?=,)|(?= )))/g,
      c => c.charAt(0).toLowerCase() + c.substring(1)
    );
    let subAndDown = andDown.substring(1)
    return andDown[0][0].toUpperCase() + subAndDown
  } 
}