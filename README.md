# Optimizely Reindex Module
This Optimizley module can be used to reindex a node and it's children only or the entire tree (descendants) under the node. This will add options into the node's context menu, 'Reindex Children' and 'Reindex Tree'. As the name 'Reindex Children' will only index the node and it's children and the 'Reindex Tree' will index the node and the entire tree under it. 


## module.config
```sh
<module xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
	<assemblies>
		<!--This adds the assembly to the "default module"-->
		<add assembly="OptimizelyModules.CMS" />
	</assemblies>
	<clientResources>
		<add name="epi-cms.widgets.base" path="Styles/Styles.css" resourceType="Style"/>
	</clientResources>
	<dojo>
		<!--Add a mapping to ~/ClientResources/Scripts to the dojo loader configuration-->
		<paths>
			<add name="optimizelyModules" path="Scripts" />
		</paths>
	</dojo>

	<clientModule initializer="optimizelyModules.Initializer">
		<moduleDependencies>
			<add dependency="CMS" type="RunAfter" />
		</moduleDependencies>
	</clientModule>
</module>
```
