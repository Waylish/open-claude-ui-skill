# open-claude-ui-skill

将第三方开源项目 [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 整理为可在 Codex 中调用的技能，用于构建 Claude 风格的聊天界面、桌面客户端和交互动效。技能入口是 [SKILL.md](SKILL.md)。

## 来源与转载说明

- **原项目及作者：** [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui)，作者 Caho1。
- **转载所依据的版本：** 原仓库提交 [`2834bc158a4849f21c97cbb2e0b10525f6e646f1`](https://github.com/Caho1/open-claude-ui/commit/2834bc158a4849f21c97cbb2e0b10525f6e646f1)。本仓库是该版本的快照，不会自动同步上游更新。
- **转载内容：** `assets/upstream/code-examples/`、`assets/upstream/src/`、`assets/upstream/claude-components-storybook.html`、`assets/upstream/package.json`、`assets/upstream/tsconfig.json` 及 `references/upstream/` 中的手册，来自上述原项目。
- **本仓库新增的整理：** `SKILL.md`、`references/component-map.md` 和 `agents/openai.yaml`，用于技能发现、按需读取资料和组件选型。
- **许可：** 原项目采用 MIT License。原版权与许可全文保留在 [LICENSE](LICENSE) 和 `assets/upstream/LICENSE`。复制或改造其中源码时，请继续保留原版权与许可声明。

这是基于第三方开源项目制作的非官方技能，与 Anthropic 或 Claude 官方无关联。原项目对产品内部实现和逆向分析的描述属于原作者陈述；使用时应以实际源码为准，并自行验证目标项目中的效果与安全性。

## 使用

把本仓库克隆或复制到 Codex 的技能目录，例如 `~/.codex/skills/open-claude-ui`，然后在任务中调用 `$open-claude-ui`。技能包含离线源码、主题文件和分卷手册；按 [组件索引](references/component-map.md) 读取当前任务需要的部分。
