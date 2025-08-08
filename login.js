// Your Supabase credentials

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tuuxpejmdfdkhstduzeu.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1dXhwZWptZGZka2hzdGR1emV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2Nzc2NjAsImV4cCI6MjA3MDI1MzY2MH0.EzkEAO1gTUNtC46GopRf0oOCgMIfCFPY0xe5PxSsgY0
const supabase = createClient(supabaseUrl, supabaseKey)
document.getElementById("login").addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Login user in Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // redirect after login
    }
});
