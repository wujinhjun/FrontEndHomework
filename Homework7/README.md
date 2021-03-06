# The final project

I want to make a game based on p5js.

This is dividing lines.
***

我还是用中文来写吧，一方面是我英语比较菜，另一方面是可能用中文能更好的表达我的心情吧（有点鲁迅先生内味了emmm）。

## 简介

1. 游戏名： 《光暗之间》
2. 背景故事：  
   月，皎洁无瑕，常被众人赋予美好之意，众多文人骚客都为之倾倒，写下无数美好篇章。
一日间，月光不见，自此消失于世间，取而代之的，是暗月，暗月之辉下，有人失去理智只为获得更强大的力量，却在不知不觉间异化为“怪物”，被人称为`暗月者`。有人恪守本心，却又不得不拿起武器，对抗暗月一派，并从其中汲取`圣洁光明`的力量以提升自我，期待着未知的、不知道是否存在的光明的未来。
3. 设定：  
   主人公是少有的幸运者，他被暗月污染，但却保持了清醒与理智，同时获得了消失不见的“月光”的眷顾，为他手中的武器赋上神眷，赐予他与神沟通的能力，只需要献祭从`暗月者`处得来的光点，即可恢复自身、恢复武器耐久、提升自我战力，于是，他成为了令诸多`暗月者`闻风丧胆的猎杀者，称号`光眷者`  
   但即使是眷者，在这样的世界里，也会遭遇暗手，也许他可以对抗明面的攻击，但阴暗处的偷袭，同样会令他防不胜防
   敌人被击杀后析出光点，主角可以拾取，但可能是有毒的，会使主角受伤

4. 规划与实现
   - [X] 1. 简单的UI界面
   - [X] 2. 简单的四叉树实现（在学习了[此视频](https://www.youtube.com/watch?v=OJxEcs0w_kE)后实现的）
   - [X] 3. 简单的物理碰撞(虽然主角的还是存在一些问题orz)
   - [X] 4. 基础游戏性（可以实现击杀、拾取、自动寻路等功能）
   - [X] 5. 实现地图选择
   - [ ] 6. 实现地图大小调节
   - [ ] 7. 实现游戏角色更换
   - [ ] 8. 实现敌人的多样性
   - [ ] 9. 实现技能加点
   - [ ] 10. 实现商店系统
   - [ ] 11. 实现摄像机的聚焦效果（使主角始终处于屏幕中心）  
    不难看出，我只实现了比较简单的几个，像地图调节、摄像机聚焦等完全没有思路实现，而7-10基本属于时间来不及了，就先写文档吧。个人觉得有时候想明白自己要做什么可能比做什么更重要吧。
    当然，在已实现的里其实还可以有更多优化的点，比如子弹的颜色，敌人攻击时的变化、掉落物的闪烁提示等

5. 实现技术：  
   基于p5js框架开发的canvas小游戏，除此之外并未采用其他的库，虽然不知道这究竟算是蠢还是勇气可嘉亦或者是二者兼而有之……

6. [一个演示视频](https://www.bilibili.com/video/BV1nL4y1F77P/)
## 后记

毫不夸张的讲，今晚的这个readme或许是我近几个月来写的最有感情的一个了。这种心情很难表述出来，用类比来说的话，和我高二时准备了半年竞赛，然后在考点考完后，走出来看到了中午湛蓝的天空的感觉，如释重负？亦或者是怅然若失。至于原因，且听我细细道来吧

这个游戏叫做《光暗之间》，故事的主人公行走在光暗之间，既有暗的邪恶（可以析出敌人的光点）， 也有所谓的坚持，可那坚持就真的对吗？以“光”蚕食“暗”便是正确的吗，想必没有那么简单吧。创世时，光影互生，又岂可只仰慕光明。  

当然，还有一个原因是：我第一次的游戏开发也是一个类似的背景故事，但那时的我只学过一点点C和python，只有一点点面向数据编程的经验，完全不懂什么是oop，也不懂3D，用的还不是unity、unreak这种很完备的游戏引擎。于是，结局显而易见的惨烈，当时的那个角色只能够动起来，血条都无法显示……给尚且稚嫩的我留下了不可磨灭的记忆。后来一直想着什么时候学一下unity或者unreal把它真正实现出来。但一直都是纯想……一直没能找到一个机会逼自己去学一下  

好在这学期有这么个机会，想了想，就决定做一下这个内容，算是在一定程度上实现一下自己曾经的梦吧，尽管大打折扣了，但这至少代表着我离实现更近了一步，不是吗？

尽管剩下的部分我是有思路的，但我真的愿意把它做下去吗？或许吧，不知道我又能否在结束后依然保有这种热情与时间，去一点点调试，去一点点打磨，把它做到一个理想的情况。

这是当时的一些设计稿（随手画的，时间不是很够,再加上实现能力有限，真的不是说我的审美就这个鸟样子了!）：
<img src="https://gitee.com/wujinhjun/picture-bed-for-wujinhjun/raw/master/img/002.png" width=400/>
<img src="https://gitee.com/wujinhjun/picture-bed-for-wujinhjun/raw/master/img/001.png" width=400/>

行文至此，感慨颇多。这个“作品”算是借这门课的酒浇了自家旧块垒，也不知我今日之愁，未来又会有谁来解

很开心有人能看到这里，那就以一首词作为结尾吧
<img src="https://gitee.com/wujinhjun/picture-bed-for-wujinhjun/raw/master/img/微信图片_20220513215545.jpg" width=400/>
