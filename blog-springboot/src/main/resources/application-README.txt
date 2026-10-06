# ============================================================
# 私密配置说明（application.yml 已脱敏，真实值不要提交）
# ============================================================
# 主配置 application.yml 里的敏感字段已改成环境变量占位，例如：
#   mail.username: ${MAIL_USERNAME:}
#   mail.password: ${MAIL_PASSWORD:}
#   cos.secretId:  ${COS_SECRET_ID:}
#   cos.secretKey: ${COS_SECRET_KEY:}
#
# 【本地开发】直接用 IDEA 启动即可（数据库/Redis 密码是本地弱密码，
#   已留在主 yml 里，不影响启动）。邮箱和 COS 留空不影响本地跑。
#
# 【上云部署】有两种方式填你自己的真值，二选一：
#
# 方式一：环境变量（推荐，服务器上 export 即可，不落盘）
#   export MAIL_USERNAME=你的QQ邮箱
#   export MAIL_PASSWORD=你的QQ邮箱授权码
#   export COS_SECRET_ID=你的腾讯云SECRET_ID
#   export COS_SECRET_KEY=你的腾讯云SECRET_KEY
#   然后启动 jar：java -jar blog-springboot.jar
#
# 方式二：本地配置文件（application-local.yml，已被 .gitignore 排除）
#   在 blog-springboot/src/main/resources/ 下新建 application-local.yml，
#   填入你自己的：
#     mail:
#       username: 你的QQ邮箱
#       password: 你的授权码
#     upload:
#       cos:
#         secretId: 你的SECRET_ID
#         secretKey: 你的SECRET_KEY
#   启动时加参数激活：--spring.profiles.active=local
#
# 注意：数据库密码/Redis密码若是上云的真实值，也建议同样走环境变量。
# ============================================================
