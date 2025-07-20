# Contributing to SHA256 ISO Library 🤝

Thank you for your interest in contributing to the SHA256 ISO Library! This guide will help you add new distributions and improve the project.

## 🚀 Quick Start

### Adding a New Distribution

1. **Find Official Sources**: Locate the official download page for the distribution
2. **Collect Checksums**: Gather SHA256 hashes for recent releases
3. **Create CSV File**: Format the data according to our standards
4. **Test Locally**: Ensure everything works correctly
5. **Submit Pull Request**: Share your contribution with the community

## 📋 Requirements

### CSV File Format

All CSV files must follow this exact format:

```csv
Name,Version,Date,Sha256
Distribution Name,Version Number,Release Date,SHA256 Hash
```

### Example CSV Files

**ubuntu.csv:**
```csv
Name,Version,Date,Sha256
Ubuntu,22.04,2022-04-21,bfd1cee02bc4f35db939e69b934ba49a39a378797ce9aee20f6e3e3e728fefbf
Ubuntu,22.10,2022-10-20,b98f13cd86839e70cb7757d46840230496b3febea309dd73bd5f81383474e47b
```

**debian.csv:**
```csv
Name,Version,Date,Sha256
Debian-Bullseye,11.6,2021-08-14,e482910626b30f9a7de9b0cc142c3d4a079fbfa96110083be1d0b473671ce08d
Debian-Bookworm,12.11,2023-06-10,30ca12a15cae6a1033e03ad59eb7f66a6d5a258dcf27acd115c2bd42d22640e8
```

## 🔧 Technical Steps

### Step 1: Create the CSV File

1. **Create a new file** named `distribution-name.csv` (use lowercase, hyphens for spaces)
2. **Add the header row**: `Name,Version,Date,Sha256`
3. **Add data rows** with the distribution information

### Step 2: Update JavaScript

Edit `script.js` and add your new CSV file to the `loadData()` function:

```javascript
// Find this section in script.js
const [debianData, ubuntuData, ubuntuServerData] = await Promise.all([
    fetchAndParseCSV('debian.csv'),
    fetchAndParseCSV('ubuntu.csv'),
    fetchAndParseCSV('ubuntu-server.csv')
]);

// Add your new file like this:
const [debianData, ubuntuData, ubuntuServerData, newDistributionData] = await Promise.all([
    fetchAndParseCSV('debian.csv'),
    fetchAndParseCSV('ubuntu.csv'),
    fetchAndParseCSV('ubuntu-server.csv'),
    fetchAndParseCSV('new-distribution.csv')  // Add this line
]);

// Update the data combination:
allData = [...debianData, ...ubuntuData, ...ubuntuServerData, ...newDistributionData];
```

### Step 3: Test Locally

1. **Start the local server**:
   ```bash
   python3 -m http.server 8000
   ```

2. **Open your browser** and go to `http://localhost:8000`

3. **Test the search**:
   - Search by your distribution name
   - Search by one of the SHA256 hashes
   - Verify all data displays correctly

### Step 4: Update Documentation

1. **Update README.md**:
   - Add your distribution to the "Completed Distributions" table
   - Remove it from the "Planned Additions" table
   - Update the project structure section

2. **Update the roadmap** if applicable

## 📊 Data Quality Standards

### ✅ Required Information

- **Name**: Official distribution name (e.g., "Ubuntu", "Debian")
- **Version**: Version number (e.g., "22.04", "11.6")
- **Date**: Release date in YYYY-MM-DD format
- **Sha256**: 64-character SHA256 hash (lowercase, no spaces)

### ✅ Quality Guidelines

- **Official Sources Only**: Only include checksums from official distribution websites
- **Recent Releases**: Focus on recent and LTS releases
- **Complete Data**: All fields must be filled
- **Consistent Formatting**: Follow the established naming conventions
- **Verified Accuracy**: Double-check all hashes against official sources

### ❌ What to Avoid

- **Unofficial Sources**: Don't include hashes from unofficial mirrors
- **Incomplete Data**: Don't submit files with missing information
- **Inconsistent Formatting**: Don't mix different date formats or naming styles
- **Old/Obsolete Versions**: Focus on recent and supported releases

## 🎯 Priority Distributions

We're actively seeking contributions for these distributions:

### High Priority 🔥
- **Linux Mint** - Popular Ubuntu-based distribution
- **Pop!_OS** - System76's Ubuntu-based OS
- **Kali Linux** - Security and penetration testing
- **Arch Linux** - Rolling release distribution
- **Fedora** - Red Hat's community distribution

### Medium Priority ⚡
- **Elementary OS** - Beautiful Ubuntu-based desktop
- **Manjaro** - User-friendly Arch-based distribution
- **EndeavourOS** - Another Arch-based option
- **Tails** - Privacy-focused live system
- **FreeBSD** - Unix-like operating system

### Low Priority 📋
- **Clonezilla** - Disk cloning and imaging
- **Proxmox** - Virtualization platform
- **Xubuntu** - Ubuntu with Xfce desktop

## 🔍 Finding Official Checksums

### Common Sources

1. **Official Download Pages**: Usually have checksums listed
2. **Release Notes**: Often include verification information
3. **Torrent Files**: Sometimes include hash information
4. **GitHub Releases**: Many projects host releases on GitHub
5. **Distribution Forums**: Community members often share verified hashes

### Verification Process

1. **Download the ISO** from the official source
2. **Calculate the SHA256** using your system's tools:
   ```bash
   # Linux/macOS
   sha256sum filename.iso
   
   # Windows PowerShell
   Get-FileHash filename.iso -Algorithm SHA256
   ```
3. **Compare with official hash** to ensure accuracy

## 🐛 Troubleshooting

### Common Issues

**CSV Not Loading:**
- Check file format (no extra spaces, correct commas)
- Verify filename matches the JavaScript reference
- Ensure file is in the root directory

**Search Not Working:**
- Check browser console for JavaScript errors
- Verify CSV format is correct
- Test with a known working distribution

**Display Issues:**
- Check that all required fields are present
- Verify date format is YYYY-MM-DD
- Ensure SHA256 hash is exactly 64 characters

### Getting Help

1. **Check Existing Issues**: Search for similar problems
2. **Create Detailed Issue**: Include browser, OS, and error messages
3. **Ask in Discussions**: Use GitHub Discussions for questions
4. **Join Community**: Connect with other contributors

## 📝 Pull Request Guidelines

### Before Submitting

- [ ] **Tested locally** - Everything works on your machine
- [ ] **Updated documentation** - README reflects your changes
- [ ] **Followed formatting** - CSV format is correct
- [ ] **Verified sources** - All hashes are from official sources
- [ ] **Complete data** - All required fields are filled

### Pull Request Template

```markdown
## Added Distribution: [Distribution Name]

### Changes Made
- Added `distribution-name.csv` with [X] releases
- Updated `script.js` to include new CSV file
- Updated README.md documentation

### Verification
- [ ] All hashes verified against official sources
- [ ] Tested locally and working correctly
- [ ] Documentation updated

### Sources
- Official download page: [URL]
- Release notes: [URL] (if applicable)

### Additional Notes
Any additional information about the distribution or special considerations.
```

## 🙏 Recognition

All contributors will be recognized in:
- **README.md** - Listed in acknowledgments
- **GitHub Contributors** - Automatically tracked
- **Release Notes** - Mentioned in major releases

## 📞 Contact

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community chat

---

**Thank you for contributing to the open source community! 🌟** 
