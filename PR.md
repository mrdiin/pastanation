# Pull Request Preparation Guide

## Files to Include
1. Source Code Files:
   - All files in `src/` directory
   - All game scenes
   - Asset references
   - Configuration files

2. Configuration Files:
   - package.json
   - package-lock.json
   - vite configuration files

3. Documentation:
   - DEPLOYMENT.md
   - README.md (if modified)
   - PR.md (this file)

4. Git Configuration:
   - .gitignore

## Files to Exclude
1. Build artifacts:
   - `dist/` directory and its contents
   - Any temporary build files

2. Dependencies:
   - `node_modules/` directory

3. Environment-specific files:
   - `.env` files
   - Local configuration files
   - IDE settings

## PR Creation Steps
1. Ensure all source files are added:
```bash
git add src/
git add package.json
git add package-lock.json
git add vite/
git add DEPLOYMENT.md
git add PR.md
git add .gitignore
```

2. Create a meaningful commit:
```bash
git commit -m "Add deployment documentation and update game files"
```

3. Push changes:
```bash
git push origin your-branch-name
```

4. Create PR with:
   - Clear title describing changes
   - Reference to any related issues
   - Brief description of deployment changes
   - Testing steps performed

## Deployment Verification
Before submitting PR, verify:
1. Game builds successfully locally
2. All deployment steps in DEPLOYMENT.md work
3. Game runs correctly on the server
4. No sensitive information is included

## Post-PR Checklist
- [ ] All source files included
- [ ] No build artifacts committed
- [ ] Documentation is complete
- [ ] Deployment steps verified
- [ ] No sensitive data exposed
- [ ] All changes tested locally 