[![DeepSource Issues](https://deepsource.io/gh/vapronva/ping_thats_a_nice_argument_unfortunately_dot_com-website.svg/?label=active+issues&show_trend=true&token=sTHrwnBgXcoCqblABKhyg6z9)](https://deepsource.io/gh/vapronva/ping_thats_a_nice_argument_unfortunately_dot_com-website/?ref=repository-badge)
[![API Uptime](https://status.vapronva.pw/api/v1/endpoints/websites-thatsaniceargumentunfortunatelly_ping-thats-a-nice-argument-unfortunately-dot-com-backend-url-direct/uptimes/7d/badge.svg)](https://status.vapronva.pw/endpoints/websites-thatsaniceargumentunfortunatelly_ping-thats-a-nice-argument-unfortunately-dot-com-backend-url-direct)
[![Website Uptime](https://status.vapronva.pw/api/v1/endpoints/websites-thatsaniceargumentunfortunatelly_ping-thats-a-nice-argument-unfortunately-dot-com-frontend-url-ping/uptimes/7d/badge.svg)](https://status.vapronva.pw/endpoints/websites-thatsaniceargumentunfortunatelly_ping-thats-a-nice-argument-unfortunately-dot-com-frontend-url-ping)
[![Continuous Integration](https://gitlab.vapronva.pw/vapronva/ping_thats_a_nice_argument_unfortunately_dot_com-website/badges/main/pipeline.svg)](https://gitlab.vapronva.pw/vapronva/ping_thats_a_nice_argument_unfortunately_dot_com-website/pipelines/latest)
[![Time Spent on the Project](https://wakapi.vapronva.pw/api/badge/vapronva/interval:any/project:ping_thats_a_nice_argument_unfortunately_dot_com-website)](https://wakapi.vapronva.pw/summary?project=ping_thats_a_nice_argument_unfortunately_dot_com-website&interval=any)

# **[ping.thats-a-nice-argument-unfortunately.com](https://ping.thats-a-nice-argument-unfortunately.com)** — Another Troll Website

> *bro, check your discord (this site) — it seems you got pinged. though, the message seems a bit strange... ooh, what's that? your ip! go on this page and learn more!*

## Why?

Saw [this meme](https://cdn.discordapp.com/attachments/953044259794214982/969732143741812766/-549.mp4) on Discord. Wanted to recreate it, since [thats-a-nice-argument-unfortunately.com](https://thats-a-nice-argument-unfortunately.com) already exists.

## What? & Screenshots

![Example of how the website looks upon visit](https://static.images.vapronva.pw/_websites/pingthatsaniceargumentunfortunatelydotcom/screenshot-example-mcsshadow.png)

## How?

Really nothing to be proud of here. Just another quickly-made thingie.

### Website

#### Animations

Made animations with [Hype 4](https://tumult.com/hype/pro/) WYSIWIG editor for HTML+JS animations.\
~~i regreted doing this later...~~

Since it generates so fricking long and bloated JavaScript files, I had to manually go through the code and figure out how the hell one supposed to change text elements.\
The solution? In JS file declaring all scene parameters, rename corresponding text items; if the total IP charachter number is lower than 15, unused elements become the color of the background.

#### Other

Everything else is made with ~~beloved~~ Bootstrap just to align everything and add bottom text (🤷‍♀️), and served with Flask.
