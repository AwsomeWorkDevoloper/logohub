// Imports
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

// Config
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

// Generate image function
const generateImage = async (req, res) => {
    res.status(200).json({
        success: true
    })
}

// Exports
module.exports = { generateImage };