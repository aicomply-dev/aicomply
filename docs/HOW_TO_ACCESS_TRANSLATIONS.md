# How to Access and Test Translations

## 🚀 Starting the Development Server

First, start your development server:

```bash
npm run dev
```

The server will typically start at: **http://localhost:3000**

## 🌍 Accessing Different Language Versions

### Main Homepage URLs

Once your server is running, you can access the website in different languages:

1. **English (Default)**
   - http://localhost:3000/en
   - http://localhost:3000/ (will redirect to /en)

2. **German (Deutsch)**
   - http://localhost:3000/de

3. **French (Français)**
   - http://localhost:3000/fr

4. **Spanish (Español)**
   - http://localhost:3000/es

5. **Romanian (Română)**
   - http://localhost:3000/ro

## 🎯 What to Test

### 1. Homepage Translation
Visit any of the language URLs above and you should see:
- ✅ Hero section translated
- ✅ "3-Step Journey" section translated
- ✅ Timeline section translated
- ✅ Risk classification section translated
- ✅ Roles section translated
- ✅ "Who uses AI Comply?" section translated
- ✅ Call-to-action section translated

### 2. Navigation Menu
Check the top navigation bar:
- ✅ "Home" link translated
- ✅ "Understand", "Assess", "Implement" menus translated
- ✅ "Resources" link translated
- ✅ All dropdown menu items translated

### 3. Language Switcher
Look for the language selector in the header (top right):
- ✅ Globe icon with current language
- ✅ Click to see dropdown with all 5 languages
- ✅ Each language shows with flag emoji
- ✅ Clicking a language switches the entire page

### 4. Footer
Scroll to the bottom:
- ✅ Footer description translated
- ✅ "Platform", "Resources", "Community" sections translated
- ✅ All footer links translated
- ✅ Copyright text translated

## 🔄 Using the Language Switcher

1. **Desktop View:**
   - Look in the top right of the navigation bar
   - You'll see a dropdown with a globe icon
   - Click it to see all available languages
   - Select a language to switch

2. **Mobile View:**
   - Open the mobile menu (hamburger icon)
   - Language switcher appears at the top of the menu
   - Select your preferred language

## 📝 Example URLs to Test

### Homepage
- English: http://localhost:3000/en
- German: http://localhost:3000/de
- French: http://localhost:3000/fr
- Spanish: http://localhost:3000/es
- Romanian: http://localhost:3000/ro

### Other Pages (with locale prefix)
- Understand: http://localhost:3000/en/understand
- Assess: http://localhost:3000/en/assess
- Implement: http://localhost:3000/en/implement
- Resources: http://localhost:3000/en/resources

## 🐛 Troubleshooting

### If you see English everywhere:
- Make sure you're accessing URLs with the locale prefix (e.g., `/en`, `/de`)
- Check that the dev server is running
- Try clearing browser cache

### If language switcher doesn't work:
- Make sure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page

### If build fails:
- Run `npm run build` to see specific errors
- Check that all translation files exist in `messages/` directory
- Verify TypeScript compilation passes

## ✅ Quick Test Checklist

- [ ] Start dev server: `npm run dev`
- [ ] Visit http://localhost:3000/en (should show English)
- [ ] Visit http://localhost:3000/de (should show German)
- [ ] Click language switcher in header
- [ ] Switch to French - verify content changes
- [ ] Check navigation menu is translated
- [ ] Scroll to footer - verify it's translated
- [ ] Test on mobile view (responsive)

## 🎨 Visual Indicators

When translations are working correctly, you should see:
- Different text content for each language
- Language switcher showing current language
- All UI elements (buttons, links, labels) translated
- Consistent styling across all languages

## 📞 Need Help?

If something isn't working:
1. Check the browser console for errors
2. Verify the build completed successfully
3. Make sure all files in `messages/` directory exist
4. Check that middleware is working (should redirect `/` to `/en`)
