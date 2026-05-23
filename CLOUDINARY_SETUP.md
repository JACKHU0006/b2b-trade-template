# Cloudinary 图片存储配置指南

## 前置要求

- Cloudflare 账号（已有）
- GitHub 仓库（已有）

---

## 第一步：注册 Cloudinary

1. 打开 [cloudinary.com](https://cloudinary.com/users/register/free)
2. 使用邮箱/Google 注册
3. **无需绑卡**，免费注册
4. 完成验证后进入 Dashboard

---

## 第二步：获取 Cloudinary 凭证

1. 登录 [Cloudinary Dashboard](https://cloudinary.com/console)
2. 在 **Dashboard** 页面找到：

| 字段 | 示例 |
|------|------|
| Cloud Name | `abc123def456` |
| API Key | `123456789012345` |
| API Secret | `abc123xyz789...` |

---

## 第三步：配置 GitHub Secrets

1. 打开你的 GitHub 仓库
2. 进入 **Settings → Secrets and variables → Actions**
3. 点击 **New repository secret**，添加以下 secrets：

| Secret Name | 值 |
|-------------|-----|
| `CLOUDINARY_CLOUD_NAME` | 你的 Cloud Name |
| `CLOUDINARY_API_KEY` | 你的 API Key |
| `CLOUDINARY_API_SECRET` | 你的 API Secret |

---

## 第四步：验证配置

1. 推送任意图片到 `public/images/` 目录
2. 进入 GitHub Actions 查看日志
3. 成功后会显示：`✅ Images uploaded to Cloudinary!`

---

## 图片访问方式

### 方式一：自动转换（推荐）

上传后，图片会自动同步到 Cloudinary，URL 格式：
```
https://res.cloudinary.com/{cloud_name}/image/upload/fabletech/images/news/xxx.jpg
```

### 方式二：使用工具函数

```typescript
import { getImageUrl, imagePaths } from '../utils/images';

// 基础用法
<img src={getImageUrl('/images/news/fabletech-factory.jpg')} />

// 优化用法（自动调整尺寸和格式）
<img src={getImageUrl('/images/news/fabletech-factory.jpg', { width: 800, format: 'auto', quality: 'auto' })} />
```

### 方式三：直接使用 Cloudinary URL

```html
<img src="https://res.cloudinary.com/{cloud_name}/image/upload/fabletech/images/news/xxx.jpg" />
```

---

## 自动同步说明

当你推送图片到 `public/images/` 目录时：

```
推送图片 → GitHub Actions 检测到变更 → 自动上传到 Cloudinary
```

Cloudinary 会自动：
- ✅ 转换为 WebP/AVIF（最优格式）
- ✅ 调整图片尺寸
- ✅ 优化图片质量
- ✅ 全球 CDN 分发

---

## Cloudinary 免费额度

| 项目 | 免费额度 |
|------|---------|
| 存储空间 | **25 GB** |
| 月带宽 | 25 GB |
| 转换次数 | 25,000 次 |
| 图片优化 | ✅ 免费 |

**足够小型网站使用！**

---

## 手动上传图片（可选）

如果不使用 GitHub Actions，也可以手动上传：

1. 登录 [Cloudinary Console](https://cloudinary.com/console)
2. 进入 **Media Library**
3. 点击 **Upload** 按钮
4. 选择图片并上传
5. 复制生成的 URL

---

## 故障排除

### 图片未上传
1. 检查 GitHub Actions 日志
2. 确认 secret 配置正确
3. 验证 Cloudinary 凭证有效

### URL 不生效
1. 确认图片已上传到 Cloudinary
2. 检查 URL 中的 cloud_name 是否正确
3. 确认文件夹路径一致

---

## 相关文件

- `.github/workflows/upload-cloudinary.yml` - 自动上传工作流
- `src/utils/images.ts` - 图片 URL 工具函数
