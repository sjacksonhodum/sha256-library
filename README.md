# SHA256 ISO Library 🔍

A comprehensive collection of SHA256 checksums for popular operating system ISO files. This library serves as a trusted reference for verifying the integrity of downloaded ISO files.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue?style=flat-square)](https://sjacksonhodum.github.io/sha256-library)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

## 🌟 Features

- **🔍 Live Search Interface**: [Visit the search website](https://sjacksonhodum.github.io/sha256-library) to quickly find checksums
- **📊 Comprehensive Database**: Curated collection of verified SHA256 hashes
- **⚡ Real-time Search**: Instant results as you type
- **📱 Mobile Responsive**: Works perfectly on all devices
- **🎨 Modern UI**: Beautiful dark theme with glass morphism effects

## 📦 Currently Available

### ✅ Completed Distributions

| Distribution | Versions | Last Updated |
|--------------|----------|--------------|
| **Ubuntu** | 12.04 - 24.04 | 2024 |
| **Ubuntu Server** | 17.10 - 24.04 | 2024 |
| **Debian** | 11.6, 12.11 | 2023 |

### 🚧 Planned Additions

| Distribution | Status | Priority |
|--------------|--------|----------|
| **Linux Mint** | 🔄 Planned | High |
| **Pop!_OS** | 🔄 Planned | High |
| **Elementary OS** | 🔄 Planned | Medium |
| **Kali Linux** | 🔄 Planned | High |
| **Arch Linux** | 🔄 Planned | High |
| **Manjaro** | 🔄 Planned | Medium |
| **EndeavourOS** | 🔄 Planned | Medium |
| **Fedora** | 🔄 Planned | High |
| **Tails** | 🔄 Planned | High |
| **Clonezilla** | 🔄 Planned | Medium |
| **FreeBSD** | 🔄 Planned | Medium |
| **Windows 10** | 🔄 Planned | High |
| **Windows 11** | 🔄 Planned | High |
| **Xubuntu** | 🔄 Planned | Low |
| **Proxmox** | 🔄 Planned | Medium |

## 🚀 Quick Start

### Using the Web Interface

1. **Visit the Search Site**: [https://sjacksonhodum.github.io/sha256-library](https://sjacksonhodum.github.io/sha256-library)
2. **Search by Name**: Enter distribution name (e.g., "Ubuntu", "Debian")
3. **Search by SHA256**: Enter partial or full hash to verify
4. **Get Results**: Instantly find matching ISO checksums

### Local Development

```bash
# Clone the repository
git clone https://github.com/sjacksonhodum/sha256-library.git
cd sha256-library

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 📁 Project Structure

```
sha256-library/
├── 📄 index.html              # Main search interface
├── 📄 script.js               # Search functionality
├── 📄 README.md               # This file
├── 📊 ubuntu.csv              # Ubuntu ISO checksums
├── 📊 ubuntu-server.csv       # Ubuntu Server checksums
├── 📊 debian.csv              # Debian ISO checksums
└── 📄 CONTRIBUTING.md         # Contribution guidelines
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Distributions

1. **Create CSV File**: Add a new CSV file with the format:
   ```csv
   Name,Version,Date,Sha256
   Distribution Name,Version Number,Release Date,SHA256 Hash
   ```

2. **Update JavaScript**: Add the filename to `script.js`:
   ```javascript
   const [debianData, ubuntuData, ubuntuServerData, newDistributionData] = await Promise.all([
       fetchAndParseCSV('debian.csv'),
       fetchAndParseCSV('ubuntu.csv'),
       fetchAndParseCSV('ubuntu-server.csv'),
       fetchAndParseCSV('new-distribution.csv')  // Add this line
   ]);
   ```

3. **Update This README**: Add the new distribution to the tables above

### CSV Format Requirements

```csv
Name,Version,Date,Sha256
Ubuntu,22.04,2022-04-21,bfd1cee02bc4f35db939e69b934ba49a39a378797ce9aee20f6e3e3e728fefbf
```

- **Name**: Distribution name (e.g., "Ubuntu", "Debian")
- **Version**: Version number (e.g., "22.04", "11.6")
- **Date**: Release date in YYYY-MM-DD format
- **Sha256**: 64-character SHA256 hash (lowercase)

### Quality Guidelines

- ✅ **Verify Sources**: Only include checksums from official sources
- ✅ **Complete Data**: Include Name, Version, Date, and SHA256
- ✅ **Consistent Format**: Follow the established CSV format
- ✅ **Test Locally**: Ensure the new data loads correctly
- ✅ **Update Documentation**: Keep this README current

## 🛠️ Technical Details

### Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Tailwind CSS
- **JavaScript (ES6+)** - Vanilla JS for performance
- **GitHub Pages** - Free hosting

### Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Full Support |
| Firefox | 55+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |

### Performance

- **Fast Loading**: < 1 second initial load
- **Instant Search**: Real-time filtering
- **Mobile Optimized**: Responsive design
- **Lightweight**: No heavy frameworks

## 📈 Roadmap

### Phase 1: Core Distributions ✅
- [x] Ubuntu Desktop
- [x] Ubuntu Server  
- [x] Debian

### Phase 2: Popular Linux Distributions 🔄
- [ ] Linux Mint
- [ ] Pop!_OS
- [ ] Elementary OS
- [ ] Kali Linux
- [ ] Arch Linux

### Phase 3: Additional Linux Distributions 📋
- [ ] Manjaro
- [ ] EndeavourOS
- [ ] Fedora
- [ ] Tails

### Phase 4: Other Operating Systems 📋
- [ ] FreeBSD
- [ ] Windows 10
- [ ] Windows 11

### Phase 5: Specialized Distributions 📋
- [ ] Clonezilla
- [ ] Proxmox
- [ ] Xubuntu

## 🐛 Issues & Support

Found a bug or have a suggestion? 

1. **Check Existing Issues**: Search [existing issues](https://github.com/sjacksonhodum/sha256-library/issues)
2. **Create New Issue**: [Open a new issue](https://github.com/sjacksonhodum/sha256-library/issues/new)
3. **Provide Details**: Include browser, OS, and steps to reproduce

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ubuntu Team** - For Ubuntu ISO releases
- **Debian Project** - For Debian ISO releases
- **Contributors** - Everyone who adds checksums
- **Open Source Community** - For inspiration and tools

---

<div align="center">

**Made with ❤️ for the open source community**

[⭐ Star this repo](https://github.com/sjacksonhodum/sha256-library) | [🐛 Report issues](https://github.com/sjacksonhodum/sha256-library/issues) | [📝 Contribute](CONTRIBUTING.md)

</div> 