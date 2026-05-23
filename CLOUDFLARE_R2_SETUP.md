# Cloudflare R2 + GitHub Actions 图片存储配置指南

## 前置要求

1. Cloudflare 账号
2. GitHub 仓库

---

## 第一步：创建 R2 存储桶

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **R2 Object Storage**
3. 点击 **Create bucket**
4. 填写信息：
   - **Bucket name**: `fabletech-images`
   - **Region**: 自动（推荐）
5. 点击 **Create**

---

## 第二步：配置 R2 API 令牌

1. 在 R2 存储桶页面，点击 **Manage R2 API Tokens**
2. 点击 **Create API Token**
3. 配置权限：
   - **Token name**: `github-actions-r2`
   - **Permissions**: `Edit`
   - **Specify bucket**: 选择 `fabletech-images`
4. 点击 **Create Token**
5. **保存以下信息**：
   - `Access Key ID`
   - `Secret Access Key`

---

## 第三步：配置自定义域名（可选）

1. 在 R2 存储桶设置中，点击 **Settings**
2. 找到 **Custom Domain**
3. 添加你的域名，如：`images.fabletech.cc.cd`
4. 按提示配置 DNS CNAME 记录
5. **保存域名**，格式：`images.fabletech.cc.cd`

---

## 第四步：获取 Cloudflare 账户 ID

1. 登录 Cloudflare Dashboard
2. 右侧边栏找到 **Account ID**
3. 复制并保存

---

## 第五步：配置 GitHub Secrets

在 GitHub 仓库中进入 **Settings → Secrets and variables → Actions**，添加以下 secrets：

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | R2 API Token 的 Access Key ID |
| `AWS_SECRET_ACCESS_KEY` | R2 API Token 的 Secret Access Key |
| `R2_ACCOUNT_ID` | Cloudflare Account ID |
| `R2_BUCKET_NAME` | `fabletech-images`（或你创建的桶名） |
| `CDN_DOMAIN` | `images.fabletech.cc.cd`（或 R2 公共 URL） |
| `CLOUDFLARE_API_TOKEN` | Cloudflare Pages API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

### 获取 Cloudflare API Token

1. 进入 [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. 点击 **Create Token**
3. 使用 **Pages Edit** 模板
4. 配置账户权限并创建
5. 保存 Token

---

## 第六步：验证配置

推送任意图片到 `public/images/` 目录，GitHub Actions 将自动：
1. 检测到图片变更
2. 上传到 R2 存储桶
3. 通过 CDN 分发

---

## 图片访问方式

### 方式一：使用工具函数（推荐）

```typescript
import { getImageUrl, imagePaths } from '../utils/images';

// 使用预定义路径
const imageUrl = getImageUrl(imagePaths.news.factory);

// 使用自定义路径
const customUrl = getImageUrl('/images/news/custom-image.jpg');
```

### 方式二：直接使用 CDN URL

```typescript
// 在代码中
const CDN = import.meta.env.PUBLIC_CDN_URL;
const imageUrl = `${CDN}/images/news/fabletech-factory.jpg`;
```

### 方式三：静态 URL

构建后的图片可直接访问：
```
https://images.fabletech.cc.cd/images/news/fabletech-factory.jpg
```

---

## 费用说明

| 项目 | 免费额度 | 说明 |
|------|---------|------|
| R2 存储 | 10 GB/月 | 超出后 $0.015/GB |
| R2 类请求 | 1000万/月 | 超出后 $3.50/百万 |
| Cloudflare 出口 | 免费 | 不限流量 |

**预估月费用**：0（10GB 足够小型网站使用）

---

## 故障排除

### 图片未更新
1. 检查 GitHub Actions 日志
2. 确认 secret 配置正确
3. 验证 R2 bucket 权限

### CDN 不生效
1. 检查自定义域名 DNS 配置
2. 等待 DNS 传播（最长24小时）
3. 使用 R2 公共 URL 测试

### 权限错误
1. 确认 API Token 有 Edit 权限
2. 检查 R2 Bucket 名称拼写
3. 验证 Account ID 正确

---

## 相关文件

- `.github/workflows/upload-images.yml` - 图片上传工作流
- `.github/workflows/deploy.yml` - 构建部署工作流
- `src/utils/images.ts` - 图片 URL 工具函数
