/**
 * @file   mofron-comp-VrtTxt/index.js
 * @author simpart
 */
const mf   = require('mofron');
const Text = require('mofron-comp-text');
/**
 * @class mofron.comp.VrtTxt
 * @brief vertical text component for mofron
 */
mf.comp.VrtTxt = class extends Text {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('VrtTxt');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.style({
                '-ms-writing-mode' : 'tb-rl',
                'writing-mode'     : 'vertical-rl'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.VrtTxt;
/* end of file */
