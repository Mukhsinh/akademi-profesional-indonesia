#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking environment variables...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('❌ .env.local file not found');
  console.log('📝 Please create .env.local file with the following content:\n');
  console.log('NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key');
  console.log('NEXT_PUBLIC_SITE_URL=http://localhost:3000\n');
  process.exit(1);
}

// Read .env.local
const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n');

let hasSupabaseUrl = false;
let hasSupabaseKey = false;
let hasSiteUrl = false;

lines.forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
    hasSupabaseUrl = true;
    const value = line.split('=')[1];
    if (value === 'your_supabase_project_url' || !value) {
      console.log('⚠️  NEXT_PUBLIC_SUPABASE_URL is not configured properly');
    } else {
      console.log('✅ NEXT_PUBLIC_SUPABASE_URL is configured');
    }
  }
  
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
    hasSupabaseKey = true;
    const value = line.split('=')[1];
    if (value === 'your_supabase_anon_key' || !value) {
      console.log('⚠️  NEXT_PUBLIC_SUPABASE_ANON_KEY is not configured properly');
    } else {
      console.log('✅ NEXT_PUBLIC_SUPABASE_ANON_KEY is configured');
    }
  }
  
  if (line.startsWith('NEXT_PUBLIC_SITE_URL=')) {
    hasSiteUrl = true;
    const value = line.split('=')[1];
    if (value === 'http://localhost:3000' || !value) {
      console.log('✅ NEXT_PUBLIC_SITE_URL is configured');
    }
  }
});

if (!hasSupabaseUrl) {
  console.log('❌ NEXT_PUBLIC_SUPABASE_URL is missing');
}

if (!hasSupabaseKey) {
  console.log('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY is missing');
}

if (!hasSiteUrl) {
  console.log('⚠️  NEXT_PUBLIC_SITE_URL is missing (optional)');
}

console.log('\n📋 Next steps:');
console.log('1. Get your Supabase credentials from https://supabase.com/dashboard');
console.log('2. Update .env.local with your actual values');
console.log('3. Restart your development server with: npm run dev');
console.log('\n🔗 Supabase Setup Guide:');
console.log('- Go to your Supabase project dashboard');
console.log('- Navigate to Settings > API');
console.log('- Copy the Project URL and anon public key');
console.log('- Paste them into your .env.local file');
