const fs = require('fs');

// Fix remaining theme references in About.tsx
let content = fs.readFileSync('src/components/About.tsx', 'utf8');

// Fix the specific lines that weren't caught
content = content.replace(/margin-bottom: \$\{theme\.spacing\.sm\};/g, 'margin-bottom: ${({ theme }) => theme.spacing.sm};');
content = content.replace(/color: \$\{theme\.colors\.text\};/g, 'color: ${({ theme }) => theme.colors.text};');
content = content.replace(/color: \$\{theme\.colors\.primary\};/g, 'color: ${({ theme }) => theme.colors.primary};');
content = content.replace(/margin-bottom: \$\{theme\.spacing\.xs\};/g, 'margin-bottom: ${({ theme }) => theme.spacing.xs};');
content = content.replace(/color: \$\{theme\.colors\.textLight\};/g, 'color: ${({ theme }) => theme.colors.textLight};');
content = content.replace(/margin-bottom: \$\{theme\.spacing\.lg\};/g, 'margin-bottom: ${({ theme }) => theme.spacing.lg};');
content = content.replace(/padding-bottom: \$\{theme\.spacing\.md\};/g, 'padding-bottom: ${({ theme }) => theme.spacing.md};');
content = content.replace(/\$\{theme\.colors\.border/g, '${({ theme }) => theme.colors.border');
content = content.replace(/gap: \$\{theme\.spacing\.sm\};/g, 'gap: ${({ theme }) => theme.spacing.sm};');
content = content.replace(/margin-top: \$\{theme\.spacing\.md\};/g, 'margin-top: ${({ theme }) => theme.spacing.md};');
content = content.replace(/background: \$\{theme\.colors\.primary\};/g, 'background: ${({ theme }) => theme.colors.primary};');
content = content.replace(/color: \$\{theme\.colors\.white\};/g, 'color: ${({ theme }) => theme.colors.white};');
content = content.replace(/padding: \$\{theme\.spacing\.xs\} \$\{theme\.spacing\.sm\};/g, 'padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};');
content = content.replace(/border-radius: \$\{theme\.borderRadius\.medium\};/g, 'border-radius: ${({ theme }) => theme.borderRadius.medium};');
content = content.replace(/gap: \$\{theme\.spacing\.xs\};/g, 'gap: ${({ theme }) => theme.spacing.xs};');

fs.writeFileSync('src/components/About.tsx', content);

console.log('Fixed About.tsx theme references');
