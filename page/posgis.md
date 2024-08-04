# PostGIS的坑

## 导入shp文件报错

导致报错的原因：

- 导入的shp文件路径太深，换成短路径；
- 导入的shp文件名称/路径中有中文，去掉；
- 将需要导入数据的shp 文件、dbf 文件、prj 等文件放在到同一个文件夹内，且名字要一致；

初次导入前需要设置：

- [ ] 右键扩展-创建扩展-postgis选项

## 创建编号

"前缀"+str(!变量!).zfill(3)
zfill(3)表示不足3位前面补0