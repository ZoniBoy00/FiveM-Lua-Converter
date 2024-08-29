function validateScript(script) {
    const errors = [];
    
    // Add your Lua syntax validation rules here
    if (!script.includes('function')) {
        errors.push('Missing function definition.');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

module.exports = { validateScript };
