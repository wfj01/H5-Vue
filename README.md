## 轻-快-容
- ✂️轻量: 4千行C++代码，0依赖，单一头文件库（GuiLite.h）
- ⚡超快: 高效渲染，单片机上也能流畅运行
- 👫🏻兼容: 完美兼容第3方GUI框架(Qt/MFC/Winform/Cocoa/Web)，现有Qt/MFC代码可以继续使用
- ⚙️️最低硬件要求:

## 跨平台
- 支持的操作系统：iOS/macOS/WathOS，Android，Linux（ARM/x86-64），Windows（包含VR），RTOS... 甚至**无操作系统的单片机**
- 支持的开发语言： C/C++, Swift, Java, Javascript, C#, Golang...
- 支持的第3方库：Qt, MFC, Winforms, CoCoa...

## 实用的功能
- 🔣支持多语言,采用 UTF-8 编码；📀支持视频播放
- 🔨[资源制作工具](https://github.com/idea4good/GuiLiteToolkit)为你定制自己的字体/图片资源
- 📐[所见即所得的GUI布局工具](https://github.com/idea4good/GuiLitePreviewer)
- ☁️完美的“云” + “物联网”解决方案
- 📊编译活跃度统计，及实时分析
- 📦支持3D & [Web](https://github.com/idea4good/GuiLiteWeb)
- 🐋支持Docker，一条命令启动Docker: `sudo docker run -it --privileged -v /dev:/dev-share idea4good/gui-lite:latest bash /run.sh`

## 易学习和全面的技术支持
即使是C语言的初学者，也可以很快掌握GuiLite；代码只使用C++的基本特性（类和虚函数），选择C++语言，能让代码体积更小，更易阅读。
- 📚开发文档
    - [如何使用GuiLite?](documents/HowToUse.md)
    - [软件设计说明](documents/HowToWork-cn.md)
    - [如何布局UI?](documents/HowLayoutWork.md)
    - [如何制作多种文字/位图资源?](https://github.com/idea4good/GuiLiteToolkit)
    - [如何“换肤”？](https://github.com/idea4good/GuiLiteSamples/blob/master/HostMonitor/UIcode/source/resource/resource.cpp)
    - [如何传递消息?](documents/HowMessageWork.md)
    - [核心UML示意图](documents/UML.md)
- 📈学习方法
    1. 编译GuiLite库
    2. 编译、调试：HelloXXX实例程序
    3. 研读、修改100+行的`HelloXXX/UIcode/UIcode.cpp`源代码
    4. 研读`widgets`目录下的代码
    5. 研读`core`目录下的代码
    6. 扩展/开发自己的GUI库
- 📞遇到任何问题，都可以[联系我们](#社区交流)，也欢迎加入我们的开发者大家庭
- 🌐[码云Gitee快速链接](https://gitee.com/idea4good/GuiLite)
