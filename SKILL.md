---
name: open-claude-ui
description: 使用 Caho1/open-claude-ui 的设计令牌、React 组件和交互模式，构建或改造 Claude 风格的聊天界面、桌面客户端与动效。仅在用户要求该仓库或明确要求 Claude 风格 UI 时使用。
---

# Open Claude UI

把 [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 当作第三方开源实现来使用。它不是 Anthropic 官方组件库，也不能把仓库的逆向分析声明当作已经独立核实的官方规范。本技能内的资料固定于提交 `2834bc158a4849f21c97cbb2e0b10525f6e646f1`；需要当前版本时再核对上游。

## 如何使用

1. 先看目标项目的技术栈、现有设计系统和用户要求。用户要求忠实复现时采用仓库视觉语言；已有品牌约束或只借鉴某个交互时，按范围调整，不覆盖整站风格。
2. 从 [组件索引](references/component-map.md) 找到相关源码，再只读相应的 [分卷手册](references/upstream/)；不要一次载入全部资料。组件源码、主题和配置在 [assets/upstream](assets/upstream/) 中，可离线复制或改造。
3. React/TypeScript 项目优先复用相关组件的行为和 API，再处理依赖、样式和导入。其他框架可移植视觉令牌与交互逻辑，无须引入 React。复制实质性代码时保留 [MIT 许可证](LICENSE) 及原作者署名。
4. 令牌和实现以 `assets/upstream/code-examples/cds-theme.css`、对应组件源码、`tailwind.config.js` 为准。仓库说明文字与源码有名称或数值不一致的地方，不要混用：实际主题使用 `--cds-surface-0` 至 `--cds-surface-3` 和 `--cds-clay`，而部分手册举例使用 `--cds-bg-surface-*`。

## 设计与交互决策

- 视觉基线是低对比暖灰表面、陶土色强调、细边框与克制的阴影。先使用主题变量和组件圆角，避免在有边框的容器内叠加多层边框。
- 位移、缩放和展开需要动效时，参考 `ClaudeMotionPresets.ts`，按控件动作选现成预设；尊重 `prefers-reduced-motion`，避免把示例动效无差别加到所有元素。
- 实现聊天输入时处理 CJK 输入法合成态，避免回车选词时误发送。流式输出时仅在用户停留底部附近才自动跟随，用户主动滚动后不要抢回视口。
- 对话框、菜单、拖拽及媒体查看器需要检查键盘操作和焦点。预览用户生成的 HTML 时检查 iframe 隔离与 `postMessage` 的来源和目标校验；不要照搬未经验证的安全实现。
- 提供亮色和暗色状态。动态数字采用等宽数字以减少布局抖动。不要把仓库提供的商业字体或声音名称误当作可随意分发的二进制资源。

## 交付检查

在目标项目运行适用的类型检查与构建；实际检查新增页面在亮色、暗色和窄视口下的外观，以及本次涉及的交互行为。仅做设计稿时检查渲染结果。若直接修改本仓库的源码，遵守其 `AGENTS.md` 中的 `npm run typecheck` 与 `npm run build` 门禁。示例代码是移植起点，不能仅凭上游成功编译就认定目标项目已集成成功。

详细组件入口见 [组件索引](references/component-map.md)。离线视觉预览见 `assets/upstream/claude-components-storybook.html`。
