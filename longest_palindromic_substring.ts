function longestPalindrome(s: string): string {
    if (!s || s.length < 1) return "";

    let start: number = 0;
    let end: number = 0;

    const expandAroundCenter = (left: number, right: number): number => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; 
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);      
        const len2 = expandAroundCenter(i, i + 1);   
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}
