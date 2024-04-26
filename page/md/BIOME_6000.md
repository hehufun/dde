# BIOME 6000

## Project

Title: PAleao-Constraints on Monsoon Evolution and Dynamics (PACMEDY)
Dates: July 2016-August 2019
Funding organization: Belmont Forum-Climate JPI (via NERC)
Grant number: NE/P006752/1

## Dataset

Title: BIOME 6000 DB classified plotfile version 1
Summary description. The file contains BIOME 6000 reconstructions of vegetation at 0, 6, and 21ka at individual sites, where the original published nomenclature for individual regions has been converted to a globally-applicable standardized classification (BIOME 6000 Consolidated Name). Two other standardized classifications are also given: common biome names between BIOME 6000 and the BIOME 4.2 model (BIOME 4.2 BIOME 6000 common names) and the megabiome scheme used by Harrison and Bartlein (2012) (MegaBiome Scheme 2). Additional information to translate BIOME 4.2 outputs into either BIOME 6000 Consolidated Names or BIOME 4.2 BIOME 6000 common names is also given.
Publication year: 2017
Creator: Sandy P. Harrison
Organisation: Centre for Past Climate Change, University of Reading, UK
Rights Holder: University of Reading

## Terms of use

This dataset is licensed by the rights-holder(s) under a Creative Commons Attribution 4.0 International Licence: <https://creativecommons.org/licenses/by/4.0/>.

## Contents

### Background

The Palaeovegetation Mapping Project (known as BIOME 6000: Prentice and Webb, 1998) was set up under the auspices of the International Geosphere-Biosphere Programme to provide reconstructions of vegetation patterns for the mid-Holocene (MH, 6ka) and Last Glacial Maximum (LGM, 21ka), explicitly for comparison with vegetation simulations made either using vegetation-enabled climate models or by running a biogeography model driven by outputs from climate models. BIOME 6000 developed an approach to translate pollen assemblages into vegetation reconstructions (biomization) which involved classification of individual pollen taxa into plant functional types (PFTs), the characterization of major vegetation types (biomes) according to their characteristic or defining PFTs and the application of an algorithm to select the most likely biome represented at a site (Prentice et al., 1996). BIOME 6000 initially produced maps for individual regions: Europe (Prentice et al., 1996), Africa and the Arabian Peninsula (Jolly et al., 1998), the Former Soviet Union and Mongolia (Tarasov et al., 1998) and China (Yu et al., 1998). Additional regions were subsequently added including Beringia (Edwards et al., 2000), western North America (Thompson and Anderson, 2000), Canada and the eastern United States (Williams et al., 2000) and Japan (Takahara et al., 2000), and the data for northern Eurasia (Tarasov et al., 2000), China (Yu et al., 2000) and southern Europe and Africa (Elenga et al., 2000) were updated. A more comprehensive biomisation scheme was applied to the circum-Arctic region as part of the Pan-Arctic INitiative (PAIN: Bigelow et al., 2003), and biomisation was also carried for Australasia (Pickett et al., 2004) and South America (Marchant et al., 2009). Additional Chinese sites were included in biome reconstructions produced by Harrison et al. (2001) and Ni et al. (2010).

There was no attempt to standardize the biome terminology used for these regional compilations, and inevitably both the number of biomes recognized and PFT composition of individual biomes varied between regions. No attempt was made to standardize the nomenclature in the first set of global maps produced by Prentice et al. (2000). The lack of standardization makes comparison with model outputs difficult. Harrison and Bartlein (2012) produced an homogenized and very much simplified (megabiome) classification of the BIOME 6000 data and this has been used in subsequent data-model comparisons (e.g. Braconnot et al., 2012; Bragg et al., 2013) but involves considerable loss of information. The biogeography model BIOME4.2 has been recommended as a tool to convert climate-model outputs into vegetation distributions for comparison with palaeodata for palaeoclimate experiments in the current phase of the Coupled Model Intercomparison Project, CMIP6 (see e.g. Kagayama et al., 2016).  Bigelow et al. (2003) deliberately used biome names and definitions to match the biomes simulated by BIOME4.2 (Kaplan et al., 2003), but unfortunately this direct match only applies to sites north of 55°N and is not the case for other BIOME 6000 sites.

In the current data set has been produced in order to facilitate the use of BIOME 6000 for evaluation of the MH and LGM experiments in CMIP6. The file includes standardized biome names for the BIOME 6000 data set, translations of the BIOME 6000 names to BIOME4.2 biomes, a globally-applicable translation between BIOME 6000 and BIOME 4.2, and a simplified Megabiome scheme which could be used for comparisons with other vegetation models.

### File structure

Column A: Target Age (ka). This gives the assigned age of the sample in kiloyears BP, where the three periods are modern (0), mid-Holocene (6) and Last Glacial Maximum (21).
Column B: Site Name. This gives the assigned name of the site in the original publication.
Column C: Latitude. This gives the latitude of the site in decimal degrees.
Column D: Longitude. This gives the longitude of the site in decimal degrees.
Column E: BIOME 6000 Consolidated Name. This gives the biome name as in the globally-applicable BIOME 6000 standardized classification. There are 32 distinct biomes recognized in this standardized classification (see Table 1).
Column F: BIOME 6000 biome code. This gives a code for each of the biomes in the globally-applicable BIOME 6000 standardized classification.
Column G: BIOME 4.2 Biome 6000 common biomes. This gives the name of the set of biomes that is common between BIOME 6000 reconstructions and Biome 4.2 globally. This is a reduced set of biomes compared to those given in Column K, consisting of 16 biomes (see Table 1). Some of the amalgamations are necessitated by differences between the level of biome discrimination in the BIOME 6000 data set (e.g. distinctive types of tundra biomes differentiated in both BIOME 4.2 and the PAIN data set are lumped into a single category because these distinctions were not made in other regional reconstructions) and some are necessitated by ambiguities in the assignment of BIOME 6000 biomes to BIOME 4.2 biomes (e.g. whereas cold mixed forest and cool mixed forest are recognised in both BIOME 6000 and BIOME 4.2, the reconstructed biome cool-temperate evergreen needleleaf and mixed forest shares characteristics of both and is not discriminated by BIOME 4.2; the three classes are therefore amalgamated in the common biomes list).
Column H: MegaBiomes (Scheme 2). This gives the biomes as defined in the megabiome classification scheme of Harrison and Bartlein (2012). There are 8 biomes recognised in this scheme (see Table 1). These biomes are sufficiently broadly defined that they should be compatible with most of the vegetation schemes used by climate models.
Column I: BIOME 4.2 names from model code. This gives the names used in the Biome 4.2 code for outputs. These names can be directly translated into the biome names used by Bigelow et al. (2003) but were shortened in the model code for convenience.
Column J: Biome 4.2 code. This gives the code for the BIOME 4.2 biomes as output by the model. Note that these code numbers are not the same as for the BIOME 6000 equivalent biomes.
Column K: BIOME4.2 BIOME 6000-equivalencies. This gives the exact equivalents between the BIOME 6000 consolidated names and the BIOME 4.2 biome names. In cases where there is no one-to-one equivalence, multiple model biomes may be indicated. For example, the biome designated as steppe in the BIOME 6000 data set could be equivalent to the simulated biomes temperate xerophytic shrubland, tropical xerophytic shrubland, temperate grassland or tropical grassland.

Table 1: Equivalence between BIOME 6000 consolidated names, BIOME 4.2 BIOME 6000 common names, and Megabiomes.

Biome 6000 Consolidated Name Biome 4.2 Biome 6000 common biomes MegaBiomes
cold deciduous forest Cold deciduous forest boreal forest
cold evergreen needleleaf forest Cold evergreen needleleaf forest boreal forest
cold mixed forest Cold or cool mixed forest boreal forest
cool evergreen needleleaf forest Cool evergreen needleleaf forest temperate forest
cool grassland Tundra tundra
cool mixed forest Cold or cool mixed forest temperate forest
cool-temperate evergreen needleleaf and mixed forest Cold or cool mixed forest temperate forest
cool-temperate rainforest Temperate evergreen needleleaf forest temperate forest
cushion forb tundra Tundra tundra
Desert Desert desert
erect dwarf shrub tundra Tundra tundra
graminoid and forb tundra Tundra tundra
low and high shrub tundra Tundra tundra
prostrate dwarf shrub tundra Tundra tundra
Steppe Grassland/shrubland grassland and dry shrubland
temperate deciduous broadleaf forest Temperate deciduous broadleaf forest temperate forest
temperate evergreen needleleaf forest Temperate evergreen needleleaf forest temperate forest
temperate evergreen needleleaf open woodland Temperate evergreen needleleaf open woodland temperate forest
temperate grassland and xerophytic shrubland Grassland/shrubland grassland and dry shrubland
temperate or tropical grassland and xerophytic shrubland Grassland/shrubland grassland and dry shrubland
temperate sclerophyll woodland and shrubland Temperate sclerophyll woodland and shrubland savanna and dry woodland
temperate xerophytic woods/scrub Grassland/shrubland grassland and dry shrubland
tropical deciduous broadleaf forest and woodland Tropical deciduous broadleaf forest and woodland tropical forest
tropical evergreen broadleaf forest Tropical evergreen broadleaf forest tropical forest
tropical savanna Tropical savanna savanna and dry woodland
tropical semi-evergreen broadleaf forest Tropical semi-evergreen broadleaf forest tropical forest
tundra Tundra tundra
warm-temperate evergreen broadleaf and mixed forest Warm-temperate evergreen broadleaf and mixed forest warm-temperate forest
warm-temperate evergreen broadleaf forest Warm-temperate evergreen broadleaf and mixed forest warm-temperate forest
warm-temperate rainforest Warm-temperate evergreen broadleaf and mixed forest warm-temperate forest
wet sclerophyll forest Warm-temperate evergreen broadleaf and mixed forest warm-temperate forest
xerophytic woods/scrub Grassland/shrubland grassland and dry shrubland

### References

Bigelow, N.H., Brubaker, L.B., Edwards, M.E., Harrison, S.P., Prentice, I.C., Anderson, P.M., Andreev, A.A., Bartlein, P.J., Christensen, T.R., Cramer, W., Kaplan, J.O., Lozhkin, A.V., Matveyeva, N.V., Murray, D.V., McGuire, A.D., Razzhivin, V.Y., Ritchie, J.C., Smith, B., Walker, D.A., Gajewski, K., Wolf, V., Holmqvist, B.H., Igarashi, Y., Kremenetskii, K., Paus, A., Pisaric, M.F.J., Vokova, V.S. (2003) Climate change and Arctic ecosystems I. Vegetation changes north of 55°N between the last glacial maximum, mid-Holocene and present. Journal of Geophysical Research-Atmosphere 108, No. D19, 8170.
Bragg, F., Prentice, I.C., Harrison, S.P., Foster, P.N., Eglinton, G., Rommerskirchen F., Rullkötter, J. (2013) n-Alkane stable isotope evidence for CO2 as a driver of vegetation change.. Biogeosciences 10: 2001–2010.
Braconnot, P., Harrison, S.P., Kageyama, M., Bartlein, P.J., Masson-Delmotte, V., Abe-Ouchi, A., Otto-Bliesner, B., Zhao, Y. (2012). Evaluation of climate models using palaeoclimatic data. Nature Climate Change 2: 417-424. (DOI: 10.1038/NCLIMATE1456)
Edwards, M.E., Anderson, P.M., Brubaker, L.B., Ager, T., Andreev, A.A., Bigelow, N.H., Cwynar, L.C., Eisner, W.R., Harrison, S.P., Hu, F.-S., Jolly, D., Lozhkin, A.V., MacDonald, G.M., Mock, C.J., Ritchie, J.C., Sher, A.V., Spear, R.W., Williams, J., Yu, G. (2000) Pollen-based biomes for Beringia 18,000, 6000 and 0 14C yr B.P. Journal of Biogeography 27: 521-554.
Elenga, H., Peryon, O., Bonnefille, R., Prentice, I.C., Jolly, D., Cheddadi, R., Guiot, J., Andrieu, V., Bottema, S., Buchet, G.-L., de Beaulieu, J.L., Hamilton, A.C., Maley, J., Marchant, R., Perez-Obiol, R., Reille, M., Riollet, G., Scott, L., Straka, H., Taylor, D., Van Campo, E., Vincens, A., Laarif, F., Jonson, H. (2000) Pollen-based reconstruction for Southern Europe and Africa 18,000 years ago. Journal of Biogeography 27: 621-634.
Harrison, S.P., Bartlein, P.J. (2012) Records from the past, lessons for the future: what the palaeo-record implies about mechanisms of global change. In: A. Henderson-Sellers and K. McGuffie (Eds), The Future of the World’s Climates. Elsevier, pp. 403-436.
Harrison, S.P., Yu, G., Takahara, H., Prentice, I.C. (2001) Plant diversity and palaeovegetation in East Asia. Nature 413: 129-130.
Jolly, D., Prentice, C.I., Bonnefille, R., Ballouche, A., Bengo, M., Brenac, P., Buchet, G., Burney, D., Cazet, J-P., Cheddadi, R., Edorh, T., Elenga, H., Elmoutaki, S., Guiot, J., Laarif, F., Lamb, H., Lezine, A-M., Maley, J., Mbenza, M., Peryon, O., Reille, M., Reynaud-Farrera, I., Riollet, G., Ritchie, J.C., Roche, E., Scott, L., Ssemmanda, I., Straka, H., Umer, M., Van Campo, E., Vilimumbalo, S., Vincens, A., Waller, M. (1998) Biome reconstruction from pollen and plant macrofossil data for Africa and the Arabian peninsula at 0 and 6000 years. Journal of Biogeography 25: 1007-1027.
Kageyama, M., Braconnot, P., Harrison, S.P., Haywood, A., Jungclaus, J., Otto-Bliesner, B., Peterschmitt, J.-Y., Abe-Ouchi, A., Albani, S., Bartlein, P., Brierley, C., Crucifix, M., Dolan, A., Fernandez-Donado, L., Fischer, H., Hopcroft, P., Ivanovic, R., Lambert, F., Lunt, D., Mahowald, N., Peltier, W.R., Phipps, S., Roche, D., Schmidt, G., Tarasov, L., Valdes, P., Zhang, Q., Zhou, T. (2016) PMIP4-CMIP6: the contribution of the Paleoclimate Modelling Intercomparison Project to CMIP6. Geoscientific Model Development Discussions (DOI:10.5194/gmd-2016-106)
Kaplan, J.O., Bigelow, N.H., Bartlein, P.J., Christensen, T.R., Cramer, W., Harrison, S.P., Matveyeva, N.V., McGuire, A.D., Murray, D.F., Prentice, I.C., Razzhivin, V.Y., Smith, B. and Walker, D.A., Anderson, P.M., Andreev, A.A., Brubaker, L.B., Edwards, M.E., Lozhkin, A.V. (2003) Climate change and Arctic ecosystems II: Modeling, palaeodata-model comparisons, and future projections. Journal of Geophysical Research-Atmosphere 108, No. D19, 8171. (DOI: 10.1029/2002JD002559)
Marchant, R.A., Harrison, S.P., Hooghiemstra, H., Markgraf, V., Boxel, J.H., Ager, T., Almeida, L., Anderson, R., Baied, C., Behling, H., Berrio, J.C., Burbridge, R., Björck, S., Byrne, R., Bush, M.B., Cleef, A.M., Duivenvoorden, J.F., Flenley, J.R., de Oliveira, P.E., van Geel, B., Graf, K.J., Gosling, W.D., Harbele, S., van der Hammen, T., Hansen, B.C.S., Horn, S.P., Islebe, G.A., Kuhry, P., Ledru, M-P., Mayle, F.E., Leyden, B.W., Lozano-Garcia, M.S., Lozano-Garcia, S., Melief, A.B.M., Moreno, P., Moar, N.T., Prieto, A., van Reenan, G.B., Salgado-Labouriau, M.L., Schäbitz, F., Schreve-Brinkamn, E.J., Wille, M. (2009) Pollen-based biome reconstructions for Latin America at 0, 6000 and 18 000 radiocarbon years. Climate of the Past 5: 725-767.
Ni, J., Yu, G., Harrison, S.P., Prentice, I.C. (2010) Palaeovegetation in China during the late Quaternary: Biome reconstructions based on a global scheme of plant functional types. Palaeogeography, Palaeoclimatology, Palaeoecology 289: 44–61.
Pickett, E.J, Harrison, S.P., Hope, G. Harle, K., Dodson, J.R., Kershaw, A.P., Prentice, I.C., Backhouse, J., Colhoun, E.A., D’Costa, D., Flenley, J., Grindrod, J., Haberle, S., Hassell, C., Kenyon, C., Macphail, M., Martin, H., Martin, A.H., McKenzie, M., Newsome, J.C., Penny, D., Powell, J., Raine, J.I., Southern, W., Stevenson, J., Sutra, J.P., Thomas, I., van der Kaars, S., Ward, J. (2004) Pollen-based reconstructions of biome distributions for Australia, Southeast Asia and the Pacific (SEAPAC region) at 0, 6000 and 18,000 14C yr B.P. Journal of Biogeography 31:  1381-1444. (DOI: 10.1111/j.1365-2699.2004.01001.x)
Prentice, I.C., Webb III, T. (1998) BIOME 6000: reconstructing global mid-Holocene vegetation patterns from palaeoecological records. Journal of Biogeography 25: 997-1005.
Prentice, C.I., Guiot, J., Huntley, B., Jolly D., Cheddadi, R. (1996) Reconstructing biomes from palaeoecological data: a general method and its application to European pollen data at 0 and 6 ka. Climate Dynamics 12: 185-194.
Prentice, I.C., Jolly, D., BIOME 6000 participants (2000). Mid-Holocene and glacial-maximum vegetation geography of the northern continents and Africa. Journal of Biogeography 27: 507-519.
Takahara, H., Sugita, S., Harrison, S.P., Miyoshi, N., Morita, Y., Uchiyama, T. (2000) Pollen-based reconstruction of Japanese biomes at 0, 6000 and 18,000 14C yr B.P. Journal of Biogeography 27: 665-683.
Tarasov, P.E., Webb III, T., Andreev, A.A., Afanas'eva, N.B., Berezina, N.A., Bezusko, L.G., Blyakharchuk, T.A., Bolikhovskaya, N.S., Cheddadi, R., Chernavskaya, M.M., Chernova, G.M., Dorofeyuk, N.I., Dirksen, V.G., Elina, G.A., Filimonova, L.V., Glebov, F.Z., Guiot, J., Gunova, V.S., Harrison, S.P., Jolly, D., Khomutova, V.I., Kvavadze, E.V., Osipova, I.M., Panova, N.K., Prentice, I.C., Saarse, L., Sevastyanov, Volkova, V.S., Zernitskaya, V.P. (1998) Present-day and mid-Holocene biomes reconstructed from pollen and plant macrofossil data from the former Soviet Union and Mongolia. Journal of Biogeography 25: 1029-1053.
Tarasov, P.E., Volkova, V.S., Webb III, T., Guiot, J., Andreev, A.A., Bezusko, L.G., Bezusko, T.V., Bykova, G.V., Dorofeyuk, N.I., Kvavadze, E.V., Osipova, I.M., Panova, N.K. and Sevastyanov, D.V. (2000) Last glacial maximum biomes reconstructed from pollen and plant macrofossil data from northern Eurasia. Journal of Biogeography 27: 609-620.
Thompson, R.S., Anderson, K.H. (2000) Biomes of western North America at 18,000, 6,000 and 0 14C yr B.P. reconstructed from pollen and packrat midden data. Journal of Biogeography 27: 555-584.
Williams, J.W., Webb III, T., Richard, P.H., Newby, P. (2000) Late quaternary biomes of Canada and the eastern United States. Journal of Biogeography 27: 585-607.
Yu, G., Prentice, I.C., Harrison, S.P., Sun, X. (1998) Pollen-based biome reconstruction for China at 0 and 6000 years. Journal of Biogeography 25: 1055-1069.
Yu, G., Chen, X., Ni, J., Cheddadi, R., Guiot, J., Han, H., Harrison, S.P., Huang, C., Ke, M., Kong, Z., Li, S., Li, W., Liew, P., Liu, G., Liu, J., Liu, K.-B., Prentice, I.C., Qui, W., Ren, G., Song, C., Sugita, S., Sun X., Tang, L., Van Campo, E., Xia, Y., Xu, Q., Yan, S., Yang, X., Zhao, J., Zheng, Z. (2000) Palaeovegetation of China: a pollen data-based synthesis for the mid-Holocene and last glacial maximum. Journal of Biogeography 27: 635-664.
