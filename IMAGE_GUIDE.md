# Cloudinary 图片存储配置

## 使用方法

### 第一步：手动上传图片到 Cloudinary

1. 打开 [Cloudinary Media Library](https://cloudinary.com/console/media_library)
2. 点击 **Upload** 按钮
3. 选择 `public/images/` 下的所有图片文件夹拖入或选择上传
4. 上传后在 `publicId 会在 Cloudinary 中

### 第二步：复制 Cloudinary URL 使用方法

```
https://res.cloudinary.com/dynyhyfbe/image/upload/fabletech/images/xxx.jpg

或者直接使用 GitHub Pages 中的图片

### 当前图片访问方式

方式一：直接使用 GitHub Pages（推荐，最简单）

继续使用原来的 `/images/xxx.jpg` 路径，GitHub Pages 会自动处理

方式二：手动使用 Cloudinary CDN

```typescript
import { getImageUrl } from './utils/images';

// 工具函数会根据环境自动使用 CDN 或本地路径
const url = getImageUrl('/images/news/fabletech-factory.jpg');
```
